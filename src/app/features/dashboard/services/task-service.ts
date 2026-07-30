import { Service, signal } from '@angular/core';
import { Task } from '../models/task-model';

@Service()
export class TaskService {
  taskList = signal<Task[]>([
    // 1. Everyday Daily Routine Task
    {
      id: 'task-1',
      title: 'Morning Code Review & PR Triage',
      description: 'Review pending team pull requests and prioritize open issues before deep work.',
      completedPomodoros: 1,
      isCompleted: false,
      type: 'everyday',
      dueDate: null,
      createdAt: '2026-07-30T08:00:00Z',
      settings: {
        targetPomodoros: 2,
        pomoLength: 25,
        shortBreakLength: 5,
        longBreakLength: 15,
      },
    },

    // 2. High-Focus Scheduled Project Task
    {
      id: 'task-2',
      title: 'Implement Authentication Service',
      description: 'Setup JWT authentication, refresh token rotation, and Angular route guards.',
      completedPomodoros: 3,
      isCompleted: false,
      type: 'scheduled',
      dueDate: '2026-08-05',
      createdAt: '2026-07-28T10:00:00Z',
      settings: {
        targetPomodoros: 6,
        pomoLength: 45,
        shortBreakLength: 10,
        longBreakLength: 20,
      },
    },

    // 3. Short Everyday Learning Habit
    {
      id: 'task-3',
      title: 'Read Technical Documentation',
      description: 'Study Angular signal APIs, RxJS interop, and change detection optimizations.',
      completedPomodoros: 1,
      isCompleted: true,
      dueDate: null,
      createdAt: '2026-07-29T09:00:00Z',
      completedAt: '2026-07-30T10:30:00Z',
      type: 'everyday',
      settings: {
        targetPomodoros: 1,
        pomoLength: 20,
        shortBreakLength: 5,
        longBreakLength: 15,
      },
    },

    // 4. Time-Sensitive Scheduled Deadline
    {
      id: 'task-4',
      title: 'Prepare Sprint Demo Deck',
      description:
        'Create slide deck for end-of-sprint demo and record short feature walkthrough video.',
      completedPomodoros: 0,
      isCompleted: false,
      type: 'scheduled',
      dueDate: '2026-07-31',
      createdAt: '2026-07-30T07:30:00Z',
      settings: {
        targetPomodoros: 3,
        pomoLength: 25,
        shortBreakLength: 5,
        longBreakLength: 15,
      },
    },

    // 5. Intensive Scheduled Maintenance Task
    {
      id: 'task-5',
      title: 'Database Schema Migration & Cleanup',
      description:
        'Archive legacy user audit logs, run index optimization scripts, and update ORM schemas.',
      completedPomodoros: 4,
      isCompleted: true,
      type: 'scheduled',
      dueDate: '2026-08-12',
      createdAt: '2026-07-25T11:00:00Z',
      completedAt: '2026-07-29T16:00:00Z',
      settings: {
        targetPomodoros: 4,
        pomoLength: 50,
        shortBreakLength: 10,
        longBreakLength: 30,
      },
    },
  ]);

  createTask(task: Task): void {
    const newTask: Task = {
      ...task,
      id: `task-${Date.now()}`, // Simple unique ID generation
      createdAt: new Date().toISOString(),
      completedPomodoros: 0,
      isCompleted: false,
    };

    this.taskList.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(taskId: string): void {
    this.taskList.update((tasks) => tasks.filter((task) => task.id !== taskId));
  }

  updateTask(taskId: string, title?: string, description?: string): void {}

  setTaskCompleted(taskId: string, isCompleted: boolean): void {}

  persistTaskList(): void {}
}
