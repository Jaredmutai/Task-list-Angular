import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormComponent } from './reactive-form.component';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with initial values', () => {
    expect(component.form.value).toEqual({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  });
  it('should validate the form correctly', () => {
    const form = component.form;
    expect(form.valid).toBeFalse();

    form.controls['firstName'].setValue('John');
    form.controls['lastName'].setValue('Doe');
    form.controls['email'].setValue('johdoe@hmail.com');
    form.controls['password'].setValue('password123');  
    expect(form.valid).toBeTrue();
    expect(form.value).toEqual({
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@hmail.com',
      password: 'password123' 
    });
  }
  );
  it('should reset the form', () => {
    const form = component.form;
    form.controls['firstName'].setValue('John');
    form.controls['lastName'].setValue('Doe');
    form.controls['email'].setValue('johndoe@gmail.com');
    form.controls['password'].setValue('password123');  
    expect(form.valid).toBeTrue();
    component.resetForm();
    expect(form.value).toEqual({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });

  it('should have a form with initial values', () => {
    expect(component.form.value).toEqual({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  });
  it('should validate the form correctly', () => {
    const form = component.form;
    expect(form.valid).toBeFalse();

    form.controls['firstName'].setValue('John');
    form.controls['lastName'].setValue('Doe');
    form.controls['email'].setValue('johdoe@hmail.com');
    form.controls['password'].setValue('password123');  
    expect(form.valid).toBeTrue();
    expect(form.value).toEqual({
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@hmail.com',
      password: 'password123' 
    });
  }
)

  
});
