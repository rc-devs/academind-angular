import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
//import { FormsModule, } from '@angular/forms';

import { TasksService } from '../tasks.services';

@Component({
  selector: 'app-add-task',
  //standalone: true,
  //imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
 @Input({required: true}) userId!: string;
 @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService)

 onCancel(){
  this.close.emit();
 }

 onSubmit(){
  this.tasksService.addTask({
    title: this.enteredTitle,
    summary: this.enteredSummary,
    date: this.enteredDate,
  }, this.userId)
  this.close.emit();
 }
}
