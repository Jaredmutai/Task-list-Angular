import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks$ = this.taskService.tasks$;
  newTask: string = '';
  searchTerm: string = '';
  showFilteredList: boolean = true;

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  clearTasks() {
    this.taskService.clearTasks();
  }

  trackByTaskId(index: number, task: { id: number }): number {
    return task.id;
  }
}