import { computed, effect, Service, signal } from '@angular/core';
import { Task } from '../models/task-model';

const DEFAULT_TASKS: Task[] = [];

@Service()
export class TaskService {
  private readonly STORAGE_KEY = 'pomodoro_tasks';

  // Initialize the signal directly from localStorage (or fallback to defaults)
  taskList = signal<Task[]>(this.loadTasksFromStorage());

  selectedTask = signal<Task | null>(null);

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
