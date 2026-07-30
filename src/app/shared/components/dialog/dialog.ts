import { Component, inject, input, signal } from '@angular/core';
import { DialogService } from '../../../core/services/dialog-service';

@Component({
  selector: 'app-dialog',
  imports: [],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
})
export class Dialog {
  dialogService = inject(DialogService);
  dialogTitle = input.required<string>();
  dialogHasButtons = input.required<boolean>();

  onCancelButtonClicked() {
    this.dialogService.closeDialog();
  }

  onConfirmButtonClicked() {
    this.dialogService.closeDialog();
  }

  onCloseButtonClicked() {
    this.dialogService.closeDialog();
  }
}
