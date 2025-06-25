import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a task', () => {
    const task = { title: 'Test Task', description: 'Test Description' };
    service.addTask(task);
    expect(service.getTasks()).toContain(task);
  });

  it('should delete a task', () => {
    const task = { title: 'Test Task', description: 'Test Description' };
    service.addTask(task);
    service.deleteTask(task);
    expect(service.getTasks()).not.toContain(task);
  });

  it('should return tasks', () => {
    const task1 = { title: 'Task 1', description: 'Description 1' };
    const task2 = { title: 'Task 2', description: 'Description 2' };
    service.addTask(task1);
    service.addTask(task2);
    expect(service.getTasks()).toEqual([task1, task2]);
  });

  it('should return an empty array if no tasks are present', () => {
    expect(service.getTasks()).toEqual([]);
  });

  it('should not add a task with empty title', () => {
    const task = { title: '', description: 'Test Description' };
    service.addTask(task);
    expect(service.getTasks()).not.toContain(task);
  });

  it('should not delete a task that does not exist', () => {
    const task = { title: 'Non-existent Task', description: 'Test Description' };
    service.deleteTask(task);
    expect(service.getTasks()).not.toContain(task);
  });
  
});


