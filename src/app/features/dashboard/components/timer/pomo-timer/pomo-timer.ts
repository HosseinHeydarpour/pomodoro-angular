import { NgClass, DatePipe } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { PomodoroService } from '../../../services/pomodoro-service';
import { ModeOption, TimerMode } from '../../../models/pomodoro-model';
import { DialogService } from '../../../../../core/services/dialog-service';
import { Dialog } from '../../../../../shared/components/dialog/dialog';
import { Task } from '../../../models/task-model';
import { TaskService } from '../../../services/task-service';

@Component({
  selector: 'app-pomo-timer',
  imports: [DatePipe, NgClass, Dialog],
  templateUrl: './pomo-timer.html',
  styleUrl: './pomo-timer.scss',
})
export class PomoTimer {
  pomodoroService = inject(PomodoroService);
  dialogService = inject(DialogService);
  taskService = inject(TaskService);

  taskList = signal<Task[]>([]);

  uncompletedTasks = computed(() => this.taskList().filter((task) => !task.isCompleted));

  selectedTaskTitle: string = 'No task selected';

  // Mode configuration for template repetition
  readonly modes: ModeOption[] = [
    { id: 'pomodoro', label: 'Pomodoro' },
    { id: 'short', label: 'Short Break' },
    { id: 'long', label: 'Long Break' },
  ];

  // Aliasing service state so the template doesn't need to change
  timerMode = this.pomodoroService.timerMode;
  secondsRemaining = this.pomodoroService.secondsRemaining;
  isRunning = this.pomodoroService.isRunning;
  pomoNumber = this.pomodoroService.pomoNumber;

  // SVG dimensions for circular progress bar
  readonly RADIUS = 44;
  readonly CIRCUMFERENCE = 2 * Math.PI * this.RADIUS; // ~276.46

  // Computed properties
  totalSeconds = computed(() => this.pomodoroService.currentDurations()[this.timerMode()]);

  progress = computed(() => {
    const total = this.totalSeconds();
    if (total === 0) return 0;
    return this.secondsRemaining() / total;
  });

  strokeDashoffset = computed(() => {
    return this.CIRCUMFERENCE * (1 - this.progress());
  });

  knobPosition = computed(() => {
    // Standard polar coordinates translated to SVG percentage center (50, 50)
    const angleInRadians = (this.progress() * 360 - 90) * (Math.PI / 180);
    const x = 50 + this.RADIUS * Math.cos(angleInRadians);
    const y = 50 + this.RADIUS * Math.sin(angleInRadians);
    // Note: Added missing backticks to the string interpolation
    return { x: `${x}%`, y: `${y}%` };
  });

  timerDate = computed(() => new Date(this.secondsRemaining() * 1000));

  constructor() {
    effect(() => {
      this.taskList.set(this.taskService.taskList());
      this.selectedTaskTitle = this.taskService.selectedTask()?.title || 'No task selected';
    });
  }

  // Forwarding UI events to the service
  setMode(mode: TimerMode): void {
    this.pomodoroService.setMode(mode);
  }

  toggleTimer(): void {
    this.pomodoroService.toggleTimer();
  }

  resetTimer(): void {
    this.pomodoroService.resetTimer();
  }

  onSelectTaskButtonClicked() {
    this.dialogService.openDialog();
  }

  onTaskSelected(taskID: string) {
    this.taskService.setSelectedTask(taskID);
    this.dialogService.closeDialog();
  }
}
