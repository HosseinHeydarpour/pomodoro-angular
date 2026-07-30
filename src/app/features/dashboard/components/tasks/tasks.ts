// src/app/features/dashboard/components/tasks/tasks.ts
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { TaskType } from '../../models/task-model';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private taskService = inject(TaskService);

  taskForm: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    description: [''],
    type: ['everyday' as TaskType, [Validators.required]],
    dueDate: [null], // Only applicable if type is 'scheduled'

    // Nested form group for PomodoroSettings
    settings: this.fb.group({
      targetPomodoros: [4, [Validators.required, Validators.min(1)]],
      pomoLength: [25, [Validators.required, Validators.min(1)]],
      shortBreakLength: [5, [Validators.required, Validators.min(1)]],
      longBreakLength: [15, [Validators.required, Validators.min(1)]],
    }),
  });

  onSubmit() {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }

    const formValue = this.taskForm.value;

    // Cleanup dueDate if the type is everyday
    if (formValue.type === 'everyday') {
      formValue.dueDate = null;
    }

    console.log('Task Data Ready for Service:', formValue);

    // TODO: Call your TaskService here to save the task
    this.taskService.createTask(formValue);

    // Navigate back to the dashboard after saving
    this.router.navigate(['/']);
  }
}
