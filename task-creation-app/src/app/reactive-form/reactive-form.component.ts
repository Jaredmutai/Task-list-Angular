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