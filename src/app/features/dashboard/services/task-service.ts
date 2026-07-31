import { computed, effect, Service, signal } from '@angular/core';
import { Task } from '../models/task-model';

const DEFAULT_TASKS: Task[] = [];

@Service()
export class TaskService {
  private readonly STORAGE_KEY = 'pomodoro_tasks';

  // Initialize the signal directly from localStorage (or fallback to defaults)
  taskList = signal<Task[]>(this.loadTasksFromStorage());

  selectedTask = signal<Task | null>(null);

  stats = computed(() => {
    const tasks = this.taskList();
    const today = new Date();

    // Helper to safely check if a date string is from today
    const isToday = (dateString: Date | string | null | undefined) => {
      if (!dateString) return false;
      const d = new Date(dateString);
      return (
        d.getDate() === today.getDate() &&
        d.getMonth() === today.getMonth() &&
        d.getFullYear() === today.getFullYear()
      );
    };

    let todaysPomodoros = 0;
    let uncompletedPomodoros = 0; // <-- Changed this
    let todaysFocusMinutes = 0;
    let todaysCompletedTasks = 0;

    tasks.forEach((task) => {
      // 1. Check completed tasks for today
      if (task.isCompleted && isToday(task.completedAt)) {
        todaysCompletedTasks++;
      }

      // 2. Calculate UNCOMPLETED / REMAINING Pomodoros
      if (!task.isCompleted) {
        // Target minus completed (ensure it doesn't go below 0 if they over-achieved)
        const remaining = task.settings.targetPomodoros - task.completedPomodoros;
        if (remaining > 0) {
          uncompletedPomodoros += remaining;
        }
      }

      // 3. Count today's finished pomodoros and focus time
      if (task.pomodoroHistory) {
        const todayHistory = task.pomodoroHistory.filter((h) => isToday(h.pomodoroDoneDate));
        todaysPomodoros += todayHistory.length;
        todaysFocusMinutes += todayHistory.length * task.settings.pomoLength;
      }
    });

    const hours = Math.floor(todaysFocusMinutes / 60);
    const minutes = todaysFocusMinutes % 60;

    return {
      todaysPomodoros,
      uncompletedPomodoros, // <-- Returning the new metric
      todaysCompletedTasks,
      todaysFocusedHoursDisplay: hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`,
    };
  });

  constructor() {
    // If a task was marked as 'isSelected' in storage, set it as active on load
    const initiallySelected = this.taskList().find((task) => task.isSelected) || null;
    this.selectedTask.set(initiallySelected);

    // Auto-save to localStorage whenever `taskList` changes
    effect(() => {
      this.persistTaskList();
    });
  }

  private loadTasksFromStorage(): Task[] {
    if (typeof localStorage !== 'undefined') {
      const storedTasks = localStorage.getItem(this.STORAGE_KEY);
      if (storedTasks) {
        try {
          return JSON.parse(storedTasks);
        } catch (error) {
          console.error('Failed to parse tasks from local storage', error);
        }
      }
    }
    // Return default tasks if storage is empty
    return DEFAULT_TASKS;
  }

  persistTaskList(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.taskList()));
    }
  }

  createTask(task: Task): void {
    const newTask: Task = {
      ...task,
      id: `task-${Date.now()}`, // Simple unique ID generation
      createdAt: new Date().toISOString(),
      completedPomodoros: 0,
      isCompleted: false,
      isSelected: false,
    };

    this.taskList.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(taskId: string): void {
    this.taskList.update((tasks) => tasks.filter((task) => task.id !== taskId));

    // Clear the selected task if it was just deleted
    if (this.selectedTask()?.id === taskId) {
      this.selectedTask.set(null);
    }
  }

  updateTask(taskId: string, title?: string, description?: string): void {
    // Implement as needed
  }

  setTaskCompleted(taskId: string, isCompleted: boolean): void {
    // Implement as needed
  }

  fetchTask(taskId: string): Task | null {
    return this.taskList().find((task) => task.id === taskId) || null;
  }

  setSelectedTask(taskID: string) {
    // Mark one task as selected and all others as unselected
    this.taskList.update((tasks) =>
      tasks.map((task) => ({
        ...task,
        isSelected: task.id === taskID,
      })),
    );

    this.selectedTask.set(this.taskList().find((task) => task.id === taskID) || null);
  }
}
