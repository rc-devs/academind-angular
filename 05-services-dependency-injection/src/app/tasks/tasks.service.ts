import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoggingService } from "../logging.service";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = signal<Task[]>([]); //make data private (this component only)
  private loggingService = inject(LoggingService);

  allTasks = this.tasks.asReadonly(); //tasks available publicly as readonly

  addTask(taskData: {title:string; description: string}){
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN'
    }
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
    this.loggingService.log('ADDED TASK WITH TITLE ' + taskData.title);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus){
    this.tasks.update((oldTasks) => oldTasks.map((task) => task.id === taskId ? {...task, status: newStatus} : task)) //update task array by replacing the oldTask with the new task if the id matches, replacing the status of the task with the newStatus
    this.loggingService.log('CHANGED TASK STATUS TO ' + newStatus);
  }
}
