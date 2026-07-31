import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MainLayout } from '../../main-layout/main-layout/main-layout';
import { ThemeService } from '../../../core/services/theme-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.scss',
})
export class Header {
  private mainLayout = inject(MainLayout, { optional: true });
  readonly themeService = inject(ThemeService);

  toggleSidebar(): void {
    this.mainLayout?.toggleSidebar();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
