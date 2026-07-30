import { Component, computed, effect, inject, signal } from '@angular/core';
import { TaskService } from '../../../services/task-service';
import { Task } from '../../../models/task-model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks-widget',
  imports: [RouterLink],
  templateUrl: './tasks-widget.html',
  styleUrl: './tasks-widget.scss',
})
export class TasksWidget {
  taskService = inject(TaskService);

  taskList = signal(this.taskService.taskList());

  private router = inject(Router);

  // 1. Total tasks count
  totalTasks = computed(() => this.taskList().length);

  // 2. Completed tasks count
  completedTasks = computed(() => this.taskList().filter((task) => task.isCompleted).length);

  // 3. Completion percentage safely rounded, handling 0/0 edge case (NaN)
  completionPercentage = computed(() => {
    const total = this.totalTasks();
    if (total === 0) return 0;

    return Math.round((this.completedTasks() / total) * 100);
  });

  constructor() {
    effect(() => {
      this.taskList.set(this.taskService.taskList());
    });
  }

  onChangeTaskCompletionState(taskId: string) {
    const updatedTasks: Task[] = this.taskList().map((task) => {
      if (task.id === taskId) {
        const isCompleted = !task.isCompleted;

        return {
          ...task,
          isCompleted,
          // Set timestamp if completed; clear it (null) if unchecked
          completedAt: isCompleted ? new Date().toISOString() : null,
        };
      }
      return task;
    });

    this.taskList.set(updatedTasks);
  }

  onTaskClicked(task: Task) {
    this.router.navigate(['/tasks', task.id]);
  }
}
