import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService, Task } from '../services/task.service';

export function noWhitespaceValidator(control: any): { [key: string]: any } | null {
  const isWhitespace = (control.value || '').trim().length === 0;
  return isWhitespace && control.value ? { whitespace: true } : null;
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})

export class ReactiveFormComponent implements OnInit {
  taskForm: FormGroup;
  tasks: Task[] = [];

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), noWhitespaceValidator]],
      description: ['']
    });
    this.tasks = this.taskService.getTasks();
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.taskForm.valid) {
      this.taskService.addTask(this.taskForm.value);
      this.taskForm.reset({ title: '', description: '' });
    }
  }
  resetForm(): void {
    this.taskForm.reset({ title: '', description: '' });
  }
  get title() {
    return this.taskForm.get('title');
  }
  get description() {
    return this.taskForm.get('description');
  }
  get tasksList(): Task[] {
    return this.taskService.getTasks();
  }
  deleteTask(task: Task): void {
    this.taskService.deleteTask(task);
  }
  editTask(task: Task): void {
    this.taskForm.patchValue({
      title: task.title,
      description: task.description
    });
    this.deleteTask(task);
  }
  get form() {
    return this.taskForm.get;
  }
  get formValue() {
    return this.taskForm.value;
  }
  get formValid() {
    return this.taskForm.valid;
  }
  get formErrors() {
    return this.taskForm.errors;
  }
  get formControls() {
    return this.taskForm.controls;
  }
  get formStatus() {
    return this.taskForm.status;
  }

  
}


