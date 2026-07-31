export const DEFAULT_TIMER_DURATIONS = {
  pomodoro: 25 * 60,
  short: 5 * 60,
  long: 15 * 60,
} as const;

export type TimerMode = keyof typeof DEFAULT_TIMER_DURATIONS;

export interface ModeOption {
  id: TimerMode;
  label: string;
}
