export const TIMER_DURATIONS = {
  pomodoro: 1 * 3,
  short: 1 * 2,
  long: 1 * 3,
} as const;

export type TimerMode = keyof typeof TIMER_DURATIONS;

export interface ModeOption {
  id: TimerMode;
  label: string;
}
