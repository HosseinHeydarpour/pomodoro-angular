import { Injectable, signal, OnDestroy, Service } from '@angular/core';
import { TIMER_DURATIONS, TimerMode } from '../models/pomodoro-model';

@Service()
export class PomodoroService implements OnDestroy {
  // Primary reactive state
  readonly timerMode = signal<TimerMode>('pomodoro');
  readonly secondsRemaining = signal(TIMER_DURATIONS['pomodoro']);
  readonly isRunning = signal(false);
  readonly pomoNumber = signal(0);

  private timerInterval: ReturnType<typeof setInterval> | null = null;

  setMode(mode: TimerMode): void {
    this.pauseTimer();
    this.timerMode.set(mode);
    this.secondsRemaining.set(TIMER_DURATIONS[mode]);
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
    this.secondsRemaining.set(TIMER_DURATIONS[this.timerMode()]);
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
