import { Component, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  private tasksService = inject(TasksService); //request dependency from angular
  selectedFilter = signal<string>('all');
  tasks = this.tasksService.tasks; //replace empty array with the default from TaskService (this.tasksService) tasks property (.tasks)

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
