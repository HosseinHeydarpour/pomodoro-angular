import { Service, signal } from '@angular/core';

@Service()
export class DialogService {
  isDialogOpen = signal(false);

  openDialog(): void {
    this.isDialogOpen.set(true);
  }

  closeDialog(): void {
    this.isDialogOpen.set(false);
  }
}
