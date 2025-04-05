import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: { text: string, createdAt: Date, cost: number, id: number }[] = [];
  newTask: string = '';
  searchTerm: string = '';
  showFilteredList: boolean = true;

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks(); // Initialize tasks from service
  }

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  trackByTaskId(index: number, task: { id: number }): number {
    return task.id;
  }
}