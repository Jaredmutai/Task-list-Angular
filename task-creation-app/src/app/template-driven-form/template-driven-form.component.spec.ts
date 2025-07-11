import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormComponent } from './template-driven-form.component';

describe('TemplateDrivenFormComponent', () => {
  let component: TemplateDrivenFormComponent;
  let fixture: ComponentFixture<TemplateDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a form with title and description fields', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('input[name="title"]')).toBeTruthy();
    expect(compiled.querySelector('textarea[name="description"]')).toBeTruthy();
  });
  it('should have a submit button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button[type="submit"]')).toBeTruthy();
  });
  it('should call onSubmit when the form is submitted', () => {
    spyOn(component, 'onSubmit');
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    form?.dispatchEvent(new Event('submit'));
    expect(component.onSubmit).toHaveBeenCalled();
  });
  it('should reset the form after submission', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Test Title';
    descriptionInput.value = 'Test Description';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    expect(titleInput.value).toBe('');
    expect(descriptionInput.value).toBe('');
  });
  it('should display an error message if the form is invalid', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = '';
    descriptionInput.value = '';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(compiled.querySelector('.error-message')).toBeTruthy();
  });
  it('should display a success message after successful submission', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Test Title';
    descriptionInput.value = 'Test Description';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(compiled.querySelector('.success-message')).toBeTruthy();
  });  
  it('should display the list of tasks after submission', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Test Title';
    descriptionInput.value = 'Test Description';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(compiled.querySelector('.task-list')).toBeTruthy();
  });
  it('should display the correct number of tasks in the list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Test Title 1';
    descriptionInput.value = 'Test Description 1';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    titleInput.value = 'Test Title 2';
    descriptionInput.value = 'Test Description 2';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    const taskListItems = compiled.querySelectorAll('.task-list li');
    expect(taskListItems.length).toBe(2);
  });
  it('should display the correct task details in the list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Test Title';
    descriptionInput.value = 'Test Description';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    const taskListItem = compiled.querySelector('.task-list li') as HTMLLIElement;
    expect(taskListItem.textContent).toContain('Test Title');
    expect(taskListItem.textContent).toContain('Test Description');
  });
  it('should clear the task list when the clear button is clicked', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Test Title';
    descriptionInput.value = 'Test Description';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    const clearButton = compiled.querySelector('.clear-button') as HTMLButtonElement;
    clearButton?.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(compiled.querySelector('.task-list')).toBeFalsy();
  });
  it('should not submit the form if title is empty', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = '';
    descriptionInput.value = 'Test Description';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(compiled.querySelector('.error-message')).toBeTruthy();
  });
  it('should not submit the form if description is empty', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Test Title';
    descriptionInput.value = '';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(compiled.querySelector('.error-message')).toBeTruthy();
  });
  it('should not display success message if form submission fails', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = '';
    descriptionInput.value = '';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(compiled.querySelector('.success-message')).toBeFalsy();
  });
  it('should display an error message if the form is submitted with invalid data', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = '';
    descriptionInput.value = '';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(compiled.querySelector('.error-message')).toBeTruthy();
  });
  it('should not display the task list if no tasks have been added', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.task-list')).toBeFalsy();
  });
  it('should display the task list after a task is added', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Test Title';
    descriptionInput.value = 'Test Description';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(compiled.querySelector('.task-list')).toBeTruthy();
  });
  it('should display the correct task count in the task list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Test Title 1';
    descriptionInput.value = 'Test Description 1';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    titleInput.value = 'Test Title 2';
    descriptionInput.value = 'Test Description 2';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    const taskCount = compiled.querySelector('.task-count');
    expect(taskCount?.textContent).toContain('2 tasks');
  });
  it('should not display the task count if no tasks have been added', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.task-count')).toBeFalsy();
  });
  it('should display the task count as "1 task" if only one task has been added', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Test Title';
    descriptionInput.value = 'Test Description';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    const taskCount = compiled.querySelector('.task-count');
    expect(taskCount?.textContent).toContain('1 task');
  });
  it('should not display the success message if the form is invalid', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = '';
    descriptionInput.value = '';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(compiled.querySelector('.success-message')).toBeFalsy();
  });
  it('should display the success message after a valid form submission', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Valid Title';
    descriptionInput.value = 'Valid Description';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(compiled.querySelector('.success-message')).toBeTruthy();
  });
  it('should not display the error message if the form is valid', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Valid Title';
    descriptionInput.value = 'Valid Description';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(compiled.querySelector('.error-message')).toBeFalsy();
  });
  it('should display the task list after a valid form submission', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Valid Title';
    descriptionInput.value = 'Valid Description';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(compiled.querySelector('.task-list')).toBeTruthy();
  });
  it('should display the correct task details in the task list after a valid submission', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Valid Title';
    descriptionInput.value = 'Valid Description';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    const taskListItem = compiled.querySelector('.task-list li') as HTMLLIElement;
    expect(taskListItem.textContent).toContain('Valid Title');
    expect(taskListItem.textContent).toContain('Valid Description');
  });
  it('should clear the form fields after a valid submission', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Valid Title';
    descriptionInput.value = 'Valid Description';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(titleInput.value).toBe('');
    expect(descriptionInput.value).toBe('');
  });

  it('should not display the task list if no tasks have been added', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.task-list')).toBeFalsy();
  });
  it('should display the task list after a valid form submission', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Valid Title';
    descriptionInput.value = 'Valid Description';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(compiled.querySelector('.task-list')).toBeTruthy();
  });
  it('should display the correct task count in the task list after multiple submissions', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Test Title 1';
    descriptionInput.value = 'Test Description 1';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    titleInput.value = 'Test Title 2';
    descriptionInput.value = 'Test Description 2';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    const taskCount = compiled.querySelector('.task-count');
    expect(taskCount?.textContent).toContain('2 tasks');
  });
  it('should display the task list with correct task details after multiple submissions', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Test Title 1';
    descriptionInput.value = 'Test Description 1';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    titleInput.value = 'Test Title 2';
    descriptionInput.value = 'Test Description 2';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    const taskListItems = compiled.querySelectorAll('.task-list li');
    expect(taskListItems.length).toBe(2);
    expect(taskListItems[0].textContent).toContain('Test Title 1');
    expect(taskListItems[0].textContent).toContain('Test Description 1');
    expect(taskListItems[1].textContent).toContain('Test Title 2');
    expect(taskListItems[1].textContent).toContain('Test Description 2');
  });
  it('should clear the task list when the clear button is clicked', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Test Title';
    descriptionInput.value = 'Test Description';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    const clearButton = compiled.querySelector('.clear-button') as HTMLButtonElement;
    clearButton?.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(compiled.querySelector('.task-list')).toBeFalsy();
  });
  it('should not display the success message if the form is invalid', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = '';
    descriptionInput.value = '';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(compiled.querySelector('.success-message')).toBeFalsy();
  });
  it('should display the success message after a valid form submission', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Valid Title';
    descriptionInput.value = 'Valid Description';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(compiled.querySelector('.success-message')).toBeTruthy();
  });
  it('should not display the error message if the form is valid', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Valid Title';
    descriptionInput.value = 'Valid Description';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(compiled.querySelector('.error-message')).toBeFalsy();
  });
  it('should display the task list after a valid form submission', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    const titleInput = compiled.querySelector('input[name="title"]') as HTMLInputElement;
    const descriptionInput = compiled.querySelector('textarea[name="description"]') as HTMLTextAreaElement;

    titleInput.value = 'Valid Title';
    descriptionInput.value = 'Valid Description';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));

    form?.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(compiled.querySelector('.task-list')).toBeTruthy();
  });
});
