import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

  it('check the validation for required in password and email', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const emailElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#emailElement');
      emailElement.value = '';
      emailElement.dispatchEvent(new Event('input'));

      const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#passwordElement');
      passwordElement.value = '';
      passwordElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const emailValidator: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#emailRequired');
        expect(emailValidator).not.toBeNull();
        expect(emailValidator.innerHTML).toEqual('Email is required');

        const passwordValidators: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#passwordValidations');
        expect(passwordValidators.children.length).toEqual(1);
        expect(passwordValidators.children[0].innerHTML).toEqual('Password is required');

        const loginButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#loginButton');
        const loginMock = spyOn(componentInstance, 'login');
        expect(loginButton.disabled).toBeTruthy();
        loginButton.click();
        expect(loginMock).toHaveBeenCalledTimes(0);
      })
    })
  })

  it('check the validation for pattern in password and email field', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const emailElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#emailElement');
      emailElement.value = 'sai@gmail';
      emailElement.dispatchEvent(new Event('input'));

      const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#passwordElement');
      passwordElement.value = 'sai12';
      passwordElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const emailPatternValidator: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#emailPattern');
        expect(emailPatternValidator).not.toBeNull();
        expect(emailPatternValidator.innerHTML).toEqual('Enter a valid email pattern');

        const passwordPatterns: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#passwordValidations');
        expect(passwordPatterns.children.length).toEqual(1);
        expect(passwordPatterns.children[0].innerHTML).toEqual('Enter a password with min of 5 char with atleast 1 alphabet 1 numeric value and one special char');

        const loginButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#loginButton');
        expect(loginButton.disabled).toBeTruthy();
        const loginMock = spyOn(componentInstance, 'login');
        loginButton.click();
        expect(loginMock).toHaveBeenCalledTimes(0);
      })
    })
  })

  it('check when the values are satisfying the validations', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const emailElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#emailElement');
      emailElement.value = 'sai@gmail.com';
      emailElement.dispatchEvent(new Event('input'));

      const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#passwordElement');
      passwordElement.value = 'sai@123';
      passwordElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {

        const emailRequiredValidator: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#emailRequired');
        expect(emailRequiredValidator).toBeNull();
        
        const emailPatternValidator: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#emailPattern');
        expect(emailPatternValidator).toBeNull();

        const passwordPatterns: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#passwordValidations');
        expect(passwordPatterns).toBeNull();

        const loginButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#loginButton');
        expect(loginButton.disabled).toBeFalsy();
        const loginMock = spyOn(componentInstance, 'login');
        loginButton.click();
        expect(loginMock).toHaveBeenCalledTimes(1);
      })
    })
  })
});
