import { Injectable, signal } from "@angular/core";
import { Task } from "./task.model";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = signal<Task[]>([]); //make data private (this component only)

  allTasks = this.tasks.asReadonly(); //tasks available publicly as readonly

  addTask(taskData: {title:string; description: string}){
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN'
    }
    this.tasks.update((oldTasks) => [...oldTasks, ])
  }
}
