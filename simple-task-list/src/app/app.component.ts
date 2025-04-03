import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: { text: string, createdAt: Date, cost: number, id: number }[] = [
    { id: 1, text: 'Learn Angular', createdAt: new Date(), cost: 10 },
    { id: 2, text: 'Practice coding', createdAt: new Date(), cost: 15 }
  ];
  newTask: string = '';
  searchTerm: string = '';
  showFilteredList: boolean = true; // Toggle for filtered list

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({
        id: this.tasks.length + 1, // Simple unique ID
        text: this.newTask,
        createdAt: new Date(),
        cost: Math.floor(Math.random() * 20) + 5
      });
      this.newTask = '';
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id); // Use ID for deletion
  }

  // TrackBy function for ngFor optimization
  trackByTaskId(index: number, task: { id: number }): number {
    return task.id;
  }
}