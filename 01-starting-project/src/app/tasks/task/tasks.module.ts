import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TasksComponent } from "../../user/tasks/tasks.component";
import { TaskComponent } from "./task.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { SharedModule } from "../../shared/shared.module";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [TasksComponent, TaskComponent, AddTaskComponent],
  exports: [TasksComponent], //TaskComponent and AddTaskComponent are being used by TasksComponent, so do not need to be individually exported (bc they are declared above)
  imports: [SharedModule, CommonModule, FormsModule]
})

export class TasksModule{}
