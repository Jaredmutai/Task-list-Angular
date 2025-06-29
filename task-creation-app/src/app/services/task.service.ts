import { Injectable } from '@angular/core';

export interface Task {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
  }
  clearTasks(): void {
    this.tasks = [];
  }
  hasTasks(): boolean {
    return this.tasks.length > 0;
  }
  getTaskCount(): number {
    return this.tasks.length;
  }
  getTaskByTitle(title: string): Task | undefined {
    return this.tasks.find(task => task.title === title);
  }
  hasTaskWithTitle(title: string): boolean {
    return this.tasks.some(task => task.title === title);
  }
  hasTaskWithDescription(description: string): boolean {
    return this.tasks.some(task => task.description === description);
  }
  hasTaskWithTitleAndDescription(title: string, description: string): boolean {
    return this.tasks.some(task => task.title === title && task.description === description);
  }
  hasTaskWithTitleOrDescription(title: string, description: string): boolean {
    return this.tasks.some(task => task.title === title || task.description === description);
  }
  hasTaskWithTitleAndDescriptionCaseInsensitive(title: string, description: string): boolean {
    return this.tasks.some(task => 
      task.title.toLowerCase() === title.toLowerCase() && 
      task.description.toLowerCase() === description.toLowerCase()
    );
  }
  hasTaskWithTitleOrDescriptionCaseInsensitive(title: string, description: string): boolean {
    return this.tasks.some(task => 
      task.title.toLowerCase() === title.toLowerCase() || 
      task.description.toLowerCase() === description.toLowerCase()
    );
  }
  hasTaskWithTitleAndDescriptionContaining(title: string, description: string): boolean {
    return this.tasks.some(task => 
      task.title.includes(title) && 
      task.description.includes(description)
    );
  }

  hasTaskWithTitleOrDescriptionContaining(title: string, description: string): boolean {
    return this.tasks.some(task => 
      task.title.includes(title) || 
      task.description.includes(description)
    );
  }

  hasTaskWithTitleAndDescriptionContainingCaseInsensitive(title: string, description: string): boolean {
    return this.tasks.some(task => 
      task.title.toLowerCase().includes(title.toLowerCase()) && 
      task.description.toLowerCase().includes(description.toLowerCase())
    );
  }
}