export type TaskType = 'everyday' | 'scheduled';

export interface PomodoroSettings {
  pomoLength: number; // Duration in minutes (e.g., 25)
  shortBreakLength: number; // Duration in minutes (e.g., 5)
  longBreakLength: number; // Duration in minutes (e.g., 15)
  targetPomodoros: number; // Estimated pomodoros required (e.g., 4)
}

export interface Task {
  id: string;
  title: string; //
  description?: string; //

  // Progress tracking
  completedPomodoros: number;
  isCompleted: boolean;

  // Scheduling: Either an everyday repeating task or has a explicit due date
  type: TaskType;
  dueDate?: Date | string | null;

  // Configuration for timer when this task is active
  settings: PomodoroSettings;

  // Metadata
  createdAt: Date | string;
  completedAt?: Date | string | null;
}
