import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/dashboard/components/timer/timer').then((m) => m.Timer),
  },
  {
    path: 'tasks',
    loadComponent: () => import('./features/dashboard/components/tasks/tasks').then((m) => m.Tasks),
  },
  {
    path: 'tasks/:taskId', // 👈 Clean flat route mapping directly to the component
    loadComponent: () => import('./features/dashboard/components/tasks/tasks').then((m) => m.Tasks),
  },
];
