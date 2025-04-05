import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Makes the service available app-wide
})
export class TaskService {
  private tasks: { text: string, createdAt: Date, cost: number, id: number }[] = [
    { id: 1, text: 'Learn Angular', createdAt: new Date(), cost: 10 },
    { id: 2, text: 'Practice coding', createdAt: new Date(), cost: 15 }
  ];

  getTasks(): { text: string, createdAt: Date, cost: number, id: number }[] {
    return this.tasks;
  }

  addTask(text: string) {
    const newTask = {
      id: this.tasks.length + 1,
      text,
      createdAt: new Date(),
      cost: Math.floor(Math.random() * 20) + 5
    };
    this.tasks.push(newTask);
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}