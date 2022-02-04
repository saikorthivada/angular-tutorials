import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let componentInstance: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    componentInstance = fixture.componentInstance;
  });

  it('check the form controls inside a form group', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const email: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#email');
      const password: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');

      email.value = 'saikumar',
      password.value = '123456',

      email.dispatchEvent(new Event('input'));
      password.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(componentInstance.loginFormGroup.value).toEqual({
          email: 'saikumar',
          passwordReset: '123456'
        })
      })
    })
  })
});
