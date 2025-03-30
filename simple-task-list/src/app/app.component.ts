import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: string[] = ['Learn Angular', 'Practice coding']; // Initial tasks
  newTask: string = ''; // Bound to input field

  addTask() {
    if (this.newTask.trim()) { // Only add if not empty
      this.tasks.push(this.newTask);
      this.newTask = ''; // Clear input after adding
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1); // Remove task at index
  }
}