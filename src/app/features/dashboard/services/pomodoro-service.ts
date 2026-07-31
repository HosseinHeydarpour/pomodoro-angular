import { computed, effect, inject, signal, OnDestroy, Service } from '@angular/core';
import { DEFAULT_TIMER_DURATIONS, TimerMode } from '../models/pomodoro-model';
import { TaskService } from './task-service';

@Service()
export class PomodoroService implements OnDestroy {
  private taskService = inject(TaskService);

  // Primary reactive state
  readonly timerMode = signal<TimerMode>('pomodoro');

  // Dynamically calculate durations based on the selected task
  readonly currentDurations = computed(() => {
    const task = this.taskService.selectedTask();
    if (task) {
      // Multiply by 60 to convert model minutes to seconds
      return {
        pomodoro: task.settings.pomoLength * 60,
        short: task.settings.shortBreakLength * 60,
        long: task.settings.longBreakLength * 60,
      };
    }
    return DEFAULT_TIMER_DURATIONS;
  });

  readonly secondsRemaining = signal(this.currentDurations()['pomodoro']);
  readonly isRunning = signal(false);
  readonly pomoNumber = signal(0);

  private timerInterval: ReturnType<typeof setInterval> | null = null;

  constructor() {
    // Automatically update the remaining time when the task selection changes
    // (only if the timer is not currently running)
    effect(
      () => {
        const durations = this.currentDurations();
        if (!this.isRunning()) {
          this.secondsRemaining.set(durations[this.timerMode()]);
        }
      },
      { allowSignalWrites: true },
    );
  }

  setMode(mode: TimerMode): void {
    this.pauseTimer();
    this.timerMode.set(mode);
    this.secondsRemaining.set(this.currentDurations()[mode]);
  }

  toggleTimer(): void {
    if (this.isRunning()) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer(): void {
    if (this.isRunning()) return;

    this.isRunning.set(true);

    this.timerInterval = setInterval(() => {
      if (this.secondsRemaining() <= 1) {
        this.handleTimerCompletion();
        return;
      }
      this.secondsRemaining.update((current) => current - 1);
    }, 1000);
  }

  pauseTimer(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.isRunning.set(false);
  }

  resetTimer(): void {
    this.pauseTimer();
    this.secondsRemaining.set(this.currentDurations()[this.timerMode()]);
  }

  private handleTimerCompletion(): void {
    this.pauseTimer();

    if (this.timerMode() === 'pomodoro') {
      const nextPomoCount = this.pomoNumber() + 1;

      const currentTask = this.taskService.selectedTask();
      if (currentTask) {
        // 1. Update the main task list so the TasksWidget UI reflects the progress
        this.taskService.taskList.update((tasks) =>
          tasks.map((task) =>
            task.id === currentTask.id
              ? { ...task, completedPomodoros: task.completedPomodoros + 1 }
              : task,
          ),
        );

        // 2. Update the selectedTask signal immutably
        this.taskService.selectedTask.update((task) => {
          if (!task) return null;
          return { ...task, completedPomodoros: task.completedPomodoros + 1 };
        });
      }

      if (nextPomoCount < 4) {
        this.pomoNumber.set(nextPomoCount);
        this.setMode('short');
      } else {
        this.pomoNumber.set(0);
        this.setMode('long');
      }
      this.playPomodoroFinishedSound();
    } else {
      this.setMode('pomodoro');
      this.playBreakFinishedSound();
    }
  }

  playPomodoroFinishedSound() {
    const audio = new Audio('/sounds/pomo-finished.wav');
    audio.play().catch((err) => console.error('Error playing pomo sound:', err));
  }

  playBreakFinishedSound() {
    const audio = new Audio('/sounds/break-finish.wav');
    audio.play().catch((err) => console.error('Error playing break sound:', err));
  }

  ngOnDestroy(): void {
    this.pauseTimer();
  }
}
