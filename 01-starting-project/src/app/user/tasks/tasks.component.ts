import { Component, Input } from '@angular/core';
import { TaskComponent } from '../../tasks/task/task.component';
import { AddTaskComponent } from '../../tasks/task/add-task/add-task.component';
import { type NewTaskData } from '../../tasks/task/task.model';
import { TasksService } from '../../tasks/task/tasks.services';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,  AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask = false;


  constructor(private tasksService: TasksService) {} //dependency injection


  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string){

  }

  onNewTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }
}
