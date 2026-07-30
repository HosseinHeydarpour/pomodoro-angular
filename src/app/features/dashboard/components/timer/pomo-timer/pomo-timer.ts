import { NgClass, DatePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { PomodoroService } from '../../../services/pomodoro-service';
import { ModeOption, TimerMode, TIMER_DURATIONS } from '../../../models/pomodoro-model';

@Component({
  selector: 'app-pomo-timer',
  imports: [DatePipe, NgClass],
  templateUrl: './pomo-timer.html',
  styleUrl: './pomo-timer.scss',
})
export class PomoTimer {
  pomodoroService = inject(PomodoroService);

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
    // Note: Added missing backticks to the string interpolation
    return { x: `${x}%`, y: `${y}%` };
  });

  timerDate = computed(() => new Date(this.secondsRemaining() * 1000));

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
}
