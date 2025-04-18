import { Component } from '@angular/core';
import { TaskService, Task } from '../services/task.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {
  task: Task = { title: '', description: '' };
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.taskService.addTask({ ...this.task });
      this.task = { title: '', description: '' }; // Reset form
      form.resetForm();
    }
  }

  // Custom validator for no whitespace
  noWhitespaceValidator(control: string): boolean {
    return (control || '').trim().length > 0;
  }
}