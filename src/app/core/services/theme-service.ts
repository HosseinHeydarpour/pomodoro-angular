import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'focusflow-theme';

  readonly theme = signal<Theme>(this.getInitialTheme());
  readonly isDark = () => this.theme() === 'dark';

  constructor() {
    this.applyTheme(this.theme());
  }

  toggleTheme(): void {
    const nextTheme: Theme = this.theme() === 'dark' ? 'light' : 'dark';

    this.theme.set(nextTheme);
    this.applyTheme(nextTheme);

    try {
      localStorage.setItem(this.storageKey, nextTheme);
    } catch {
      // The selected theme still applies when storage is unavailable.
    }
  }

  private getInitialTheme(): Theme {
    try {
      const storedTheme = localStorage.getItem(this.storageKey);

      if (storedTheme === 'dark' || storedTheme === 'light') {
        return storedTheme;
      }
    } catch {
      // Fall back to the system preference when storage is unavailable.
    }

    return globalThis.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  private applyTheme(theme: Theme): void {
    const root = this.document.documentElement;

    root.classList.toggle('light', theme === 'light');
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;

    const themeColor = this.document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    themeColor?.setAttribute('content', theme === 'light' ? '#F4F7FB' : '#0B1220');
  }
}
