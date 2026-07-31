import { Component, inject } from '@angular/core';
import { TaskService } from '../../../services/task-service';

@Component({
  selector: 'app-summary',
  imports: [],
  templateUrl: './summary.html',
  styleUrl: './summary.scss',
})
export class Summary {
  taskService = inject(TaskService);
}
