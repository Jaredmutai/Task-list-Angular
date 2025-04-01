import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: { text: string, createdAt: Date, cost: number }[] = [
    { text: 'Learn Angular', createdAt: new Date(), cost: 10 },
    { text: 'Practice coding', createdAt: new Date(), cost: 15 }
  ];
  newTask: string = '';
  searchTerm: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({
        text: this.newTask,
        createdAt: new Date(),
        cost: Math.floor(Math.random() * 20) + 5 // Random cost between 5 and 24
      });
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}