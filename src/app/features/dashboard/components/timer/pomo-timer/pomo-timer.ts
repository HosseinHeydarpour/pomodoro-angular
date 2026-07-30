import { NgClass, DatePipe } from '@angular/common';
import { Component, computed, OnDestroy, signal } from '@angular/core';

const TIMER_DURATIONS = {
  pomodoro: 1 * 10,
  short: 5 * 60,
  long: 15 * 60,
} as const;

export type TimerMode = keyof typeof TIMER_DURATIONS;

interface ModeOption {
  id: TimerMode;
  label: string;
}

@Component({
  selector: 'app-pomo-timer',
  imports: [DatePipe, NgClass],
  templateUrl: './pomo-timer.html',
  styleUrl: './pomo-timer.scss',
})
export class PomoTimer implements OnDestroy {
  // Mode configuration for template repetition
  readonly modes: ModeOption[] = [
    { id: 'pomodoro', label: 'Pomodoro' },
    { id: 'short', label: 'Short Break' },
    { id: 'long', label: 'Long Break' },
  ];

  // Primary reactive state
  timerMode = signal<TimerMode>('pomodoro');
  secondsRemaining = signal<number>(TIMER_DURATIONS['pomodoro']);
  isRunning = signal<boolean>(false);
  pomoNumber = signal<number>(0);

  // SVG dimensions for circular progress bar
  readonly RADIUS = 44;
  readonly CIRCUMFERENCE = 2 * Math.PI * this.RADIUS; // ~276.46

  // Computed properties
  totalSeconds = computed(() => TIMER_DURATIONS[this.timerMode()]);

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
    return { x: `${x}%`, y: `${y}%` };
  });

  timerDate = computed(() => new Date(this.secondsRemaining() * 1000));

  private timerInterval: ReturnType<typeof setInterval> | null = null;

  /**
   * Switches to a new timer mode and resets remaining duration.
   */
  setMode(mode: TimerMode): void {
    this.pauseTimer();
    this.timerMode.set(mode);
    this.secondsRemaining.set(TIMER_DURATIONS[mode]);
  }

  /**
   * Toggles active interval execution state.
   */
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
    } else {
      this.setMode('pomodoro');
    }
  }

  ngOnDestroy(): void {
    this.pauseTimer();
  }
}
