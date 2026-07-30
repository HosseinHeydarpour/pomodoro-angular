import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/dashboard/components/timer/timer').then((m) => m.Timer),
  },
];
