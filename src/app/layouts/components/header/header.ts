import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MainLayout } from '../../main-layout/main-layout/main-layout';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.scss',
})
export class Header {
  private mainLayout = inject(MainLayout, { optional: true });

  toggleSidebar(): void {
    this.mainLayout?.toggleSidebar();
  }
}
