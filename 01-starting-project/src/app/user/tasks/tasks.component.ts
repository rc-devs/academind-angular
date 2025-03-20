import { Component, Input } from '@angular/core';
import { TaskComponent } from '../../tasks/task/task.component';
import { AddTaskComponent } from '../../tasks/task/add-task/add-task.component';
import { type NewTaskData } from '../../tasks/task/task.model';

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


  get selectedUserTasks(){
    return
  }

  onCompleteTask(id: string){

  }

  onNewTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData){

    this.isAddingTask = false;
  };
}
