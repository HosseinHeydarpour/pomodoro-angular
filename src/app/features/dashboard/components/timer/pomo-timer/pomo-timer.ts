import { NgClass, DatePipe } from '@angular/common';
import { Component, computed, OnDestroy, signal } from '@angular/core';

const TIMER_DURATIONS = {
  pomodoro: 10,
  short: 5,
  long: 8,
} as const;

export type TimerMode = keyof typeof TIMER_DURATIONS;

@Component({
  selector: 'app-pomo-timer',
  imports: [DatePipe, NgClass],
  templateUrl: './pomo-timer.html',
  styleUrl: './pomo-timer.scss',
})
export class PomoTimer implements OnDestroy {
  timerMode = signal<TimerMode>('pomodoro');
  secondsRemaining = signal<number>(TIMER_DURATIONS['pomodoro']);
  isRunning = signal<boolean>(false);
  pomoNumber = signal<number>(0);

  timerDate = computed(() => new Date(this.secondsRemaining() * 1000));
  private timerInterval: ReturnType<typeof setInterval> | null = null;

  setMode(mode: TimerMode): void {
    this.pauseTimer();
    this.timerMode.set(mode);
    this.secondsRemaining.set(TIMER_DURATIONS[mode]);
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

  private handleTimerCompletion(): void {
    this.pauseTimer();

    if (this.timerMode() === 'pomodoro') {
      const nextPomoCount = this.pomoNumber() + 1;

      if (nextPomoCount < 4) {
        this.pomoNumber.set(nextPomoCount);
        this.setMode('short');
      } else {
        this.pomoNumber.set(0);
        this.setMode('long');
      }
    } else {
      // After any break, return to pomodoro
      this.setMode('pomodoro');
    }
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
    this.secondsRemaining.set(TIMER_DURATIONS[this.timerMode()]);
  }

  ngOnDestroy(): void {
    this.pauseTimer();
  }
}
