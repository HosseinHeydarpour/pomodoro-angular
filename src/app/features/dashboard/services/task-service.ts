import { computed, effect, Service, signal } from '@angular/core';
import { Task } from '../models/task-model';

const defaultSettings = { pomoLength: 50, shortBreakLength: 10, longBreakLength: 20 };
const now = new Date().toISOString();
const DEFAULT_TASKS: Task[] = [
  {
    id: 'routine-1',
    title: '🏃‍♂️ پیاده‌روی صبحگاهی (08:00 - 09:00)',
    description: 'ترشح دوپامین و پادکست ملایم. بیرون آمدن از تخت و آماده شدن برای نبرد روزانه.',
    completedPomodoros: 0,
    isCompleted: false,
    type: 'everyday',
    settings: { pomoLength: 50, shortBreakLength: 10, longBreakLength: 20, targetPomodoros: 1 },
    isSelected: false,
    createdAt: now,
  },
  {
    id: 'routine-2',
    title: '🥞 دوش، صبحانه و مذاکره (09:00 - 09:30)',
    description: 'تنظیم ذهن و یادآوری پاداش بلوک اول. تو برده خودت نیستی!',
    completedPomodoros: 0,
    isCompleted: false,
    type: 'everyday',
    settings: { pomoLength: 30, shortBreakLength: 0, longBreakLength: 0, targetPomodoros: 1 },
    isSelected: false,
    createdAt: now,
  },
  {
    id: 'routine-3',
    title: '💻 کار عمیق ۱ (C# / .NET) (09:30 - 11:30)',
    description: '۵۰٪ مشاهده آموزش + ۵۰٪ هضم (کدزنی و نقشه ذهنی)',
    completedPomodoros: 0,
    isCompleted: false,
    type: 'everyday',
    settings: { pomoLength: 50, shortBreakLength: 10, longBreakLength: 20, targetPomodoros: 2 },
    isSelected: false,
    createdAt: now,
  },
  {
    id: 'routine-4',
    title: '🎁 پاداش اول (11:30 - 12:00)',
    description: '۳۰ دقیقه استراحت آزاد (یوتیوب، شبکه اجتماعی). شارژ مجدد دوپامین.',
    completedPomodoros: 0,
    isCompleted: false,
    type: 'everyday',
    settings: { pomoLength: 30, shortBreakLength: 0, longBreakLength: 0, targetPomodoros: 1 },
    isSelected: false,
    createdAt: now,
  },
  {
    id: 'routine-5',
    title: '🗄️ کار عمیق ۲ (SQL) (12:00 - 13:00)',
    description: 'تمرکز روی کوئری نویسی و اطلاعات روش‌محور (۳۰د یادگیری + ۳۰د تمرین).',
    completedPomodoros: 0,
    isCompleted: false,
    type: 'everyday',
    settings: { pomoLength: 50, shortBreakLength: 10, longBreakLength: 20, targetPomodoros: 1 },
    isSelected: false,
    createdAt: now,
  },
  {
    id: 'routine-6',
    title: '🍲 ناهار و استراحت عمیق (13:00 - 14:30)',
    description: 'ریکاوری عمیق (Power Nap یا NSDR) برای انتقال اطلاعات به حافظه بلند مدت.',
    completedPomodoros: 0,
    isCompleted: false,
    type: 'everyday',
    settings: { pomoLength: 90, shortBreakLength: 0, longBreakLength: 0, targetPomodoros: 1 },
    isSelected: false,
    createdAt: now,
  },
  {
    id: 'routine-7',
    title: '🇩🇪 کار عمیق ۳ (آلمانی) (14:30 - 16:30)',
    description: 'کتاب Schritte + تلاش فعال برای ساختن جمله و مکالمه در آینه.',
    completedPomodoros: 0,
    isCompleted: false,
    type: 'everyday',
    settings: { pomoLength: 50, shortBreakLength: 10, longBreakLength: 20, targetPomodoros: 2 },
    isSelected: false,
    createdAt: now,
  },
  {
    id: 'routine-8',
    title: '🚀 کار عمیق ۴ (زبان + برندسازی) (16:30 - 18:00)',
    description: 'نوشتن پست لینکدین درباره چالش امروز. مستندسازی مسیر.',
    completedPomodoros: 0,
    isCompleted: false,
    type: 'everyday',
    settings: { pomoLength: 45, shortBreakLength: 0, longBreakLength: 0, targetPomodoros: 2 },
    isSelected: false,
    createdAt: now,
  },
  {
    id: 'routine-9',
    title: '🚶‍♂️ پیاده‌روی عصرگاهی (18:00 - 19:00)',
    description: 'پاکسازی نورونی (Decompression). بدون هدفون، فقط نگاه به اطراف.',
    completedPomodoros: 0,
    isCompleted: false,
    type: 'everyday',
    settings: { pomoLength: 50, shortBreakLength: 10, longBreakLength: 20, targetPomodoros: 1 },
    isSelected: false,
    createdAt: now,
  },
  {
    id: 'routine-10',
    title: '👨‍👩‍👦 شام و معاشرت (19:00 - 20:00)',
    description: 'حضور کامل در کنار خانواده (Emotional Grounding).',
    completedPomodoros: 0,
    isCompleted: false,
    type: 'everyday',
    settings: { pomoLength: 50, shortBreakLength: 10, longBreakLength: 20, targetPomodoros: 1 },
    isSelected: false,
    createdAt: now,
  },
  {
    id: 'routine-11',
    title: '⚙️ هضم نهایی (پروژه) (20:00 - 21:30)',
    description: 'فقط ترکیب کدهای C# و SQL (خروجی مطلق، بدون آموزش دیدن).',
    completedPomodoros: 0,
    isCompleted: false,
    type: 'everyday',
    settings: { pomoLength: 45, shortBreakLength: 0, longBreakLength: 0, targetPomodoros: 2 },
    isSelected: false,
    createdAt: now,
  },
  {
    id: 'routine-12',
    title: '📚 اطلاعات مرجع (21:30 - 22:00)',
    description: 'فلش کارت Anki برای لغات آلمانی (Spaced Repetition).',
    completedPomodoros: 0,
    isCompleted: false,
    type: 'everyday',
    settings: { pomoLength: 30, shortBreakLength: 0, longBreakLength: 0, targetPomodoros: 1 },
    isSelected: false,
    createdAt: now,
  },
  {
    id: 'routine-13',
    title: '🌙 پاداش نهایی و خواب (22:00 - 23:30)',
    description: 'پایان مذاکره! هیچ وظیفه‌ای نداری. با افتخار بخواب تا فردا.',
    completedPomodoros: 0,
    isCompleted: false,
    type: 'everyday',
    settings: { pomoLength: 90, shortBreakLength: 0, longBreakLength: 0, targetPomodoros: 1 },
    isSelected: false,
    createdAt: now,
  },
];

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
