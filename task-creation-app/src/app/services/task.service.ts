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

  hasTaskWithTitleOrDescriptionContainingCaseInsensitive(title: string, description: string): boolean {
    return this.tasks.some(task => 
      task.title.toLowerCase().includes(title.toLowerCase()) || 
      task.description.toLowerCase().includes(description.toLowerCase())
    );
  }

  hasTaskWithTitleAndDescriptionStartingWith(title: string, description: string): boolean {
    return this.tasks.some(task => 
      task.title.startsWith(title) && 
      task.description.startsWith(description)
    );
  }

  hasTaskWithTitleOrDescriptionStartingWith(title: string, description: string): boolean {
    return this.tasks.some(task => 
      task.title.startsWith(title) || 
      task.description.startsWith(description)
    );
  }

  hasTaskWithTitleAndDescriptionStartingWithCaseInsensitive(title: string, description: string): boolean {
    return this.tasks.some(task => 
      task.title.toLowerCase().startsWith(title.toLowerCase()) && 
      task.description.toLowerCase().startsWith(description.toLowerCase())
    );
  }

  hasTaskWithTitleOrDescriptionStartingWithCaseInsensitive(title: string, description: string): boolean {
    return this.tasks.some(task => 
      task.title.toLowerCase().startsWith(title.toLowerCase()) || 
      task.description.toLowerCase().startsWith(description.toLowerCase())
    );
  }

  hasTaskWithTitleAndDescriptionEndingWith(title: string, description: string): boolean {
    return this.tasks.some(task => 
      task.title.endsWith(title) && 
      task.description.endsWith(description)
    );
  }

  hasTaskWithTitleOrDescriptionEndingWith(title: string, description: string): boolean {
    return this.tasks.some(task => 
      task.title.endsWith(title) || 
      task.description.endsWith(description)
    );
  }
  hasTaskWithTitleAndDescriptionEndingWithCaseInsensitive(title: string, description: string): boolean {
    return this.tasks.some(task => 
      task.title.toLowerCase().endsWith(title.toLowerCase()) && 
      task.description.toLowerCase().endsWith(description.toLowerCase())
    );
  }

  hasTaskWithTitleOrDescriptionEndingWithCaseInsensitive(title: string, description: string): boolean {
    return this.tasks.some(task => 
      task.title.toLowerCase().endsWith(title.toLowerCase()) || 
      task.description.toLowerCase().endsWith(description.toLowerCase())
    );
  }

  hasTaskWithTitleAndDescriptionMatchingRegex(title: string, description: string, regex: RegExp): boolean {
    return this.tasks.some(task => 
      regex.test(task.title) && 
      regex.test(task.description)
    );
  }

  hasTaskWithTitleOrDescriptionMatchingRegex(title: string, description: string, regex: RegExp): boolean {
    return this.tasks.some(task => 
      regex.test(task.title) || 
      regex.test(task.description)
    );
  }
  hasTaskWithTitleAndDescriptionMatchingRegexCaseInsensitive(title: string, description: string, regex: RegExp): boolean {
    return this.tasks.some(task => 
      regex.test(task.title.toLowerCase()) && 
      regex.test(task.description.toLowerCase())
    );
  }

  hasTaskWithTitleOrDescriptionMatchingRegexCaseInsensitive(title: string, description: string, regex: RegExp): boolean {
    return this.tasks.some(task => 
      regex.test(task.title.toLowerCase()) || 
      regex.test(task.description.toLowerCase())
    );
  }

  hasTaskWithTitleAndDescriptionContainingRegex(title: string, description: string, regex: RegExp): boolean {
    return this.tasks.some(task => 
      task.title.includes(title) && 
      task.description.includes(description) &&
      regex.test(task.title) &&
      regex.test(task.description)
    );
  }

  hasTaskWithTitleOrDescriptionContainingRegex(title: string, description: string, regex: RegExp): boolean {
    return this.tasks.some(task => 
      task.title.includes(title) || 
      task.description.includes(description) ||
      regex.test(task.title) ||
      regex.test(task.description)
    );
  }

  hasTaskWithTitleAndDescriptionContainingRegexCaseInsensitive(title: string, description: string, regex: RegExp): boolean {
    return this.tasks.some(task => 
      task.title.toLowerCase().includes(title.toLowerCase()) && 
      task.description.toLowerCase().includes(description.toLowerCase()) &&
      regex.test(task.title.toLowerCase()) &&
      regex.test(task.description.toLowerCase())
    );
  }

  hasTaskWithTitleOrDescriptionContainingRegexCaseInsensitive(title: string, description: string, regex: RegExp): boolean {
    return this.tasks.some(task => 
      task.title.toLowerCase().includes(title.toLowerCase()) || 
      task.description.toLowerCase().includes(description.toLowerCase()) ||
      regex.test(task.title.toLowerCase()) ||
      regex.test(task.description.toLowerCase())
    );
  }
}