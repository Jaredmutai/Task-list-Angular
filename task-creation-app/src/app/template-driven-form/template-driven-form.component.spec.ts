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
});
