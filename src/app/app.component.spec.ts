import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let componentInstance: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    componentInstance = fixture.componentInstance;
  });

  it('Login form with template driven', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const changeEventMock = spyOn(componentInstance, 'changeEvent').and.callThrough();
      const loginEventMock = spyOn(componentInstance, 'login').and.callThrough();

      const usernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
      usernameElement.value = 'sampleUsername';
      usernameElement.dispatchEvent(new Event('input'));
      usernameElement.dispatchEvent(new Event('blur'));

      const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
      passwordElement.value = 'samplePassword';
      passwordElement.dispatchEvent(new Event('input'));

      const buttonElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#submitId');
      buttonElement.click();

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(changeEventMock).toHaveBeenCalledTimes(2);
        expect(loginEventMock).toHaveBeenCalledTimes(1);
      })
    })
  })

  it('confirm form check', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const confirmMethodMock = spyOn(componentInstance, 'confirmMethod').and.callThrough();
      const formDetails: HTMLFormElement = fixture.debugElement.nativeElement.querySelector('#confirmFormId');
      
      const confirmButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#confirmButton');
      confirmButton.click();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(confirmMethodMock).toHaveBeenCalledTimes(1);
        expect(formDetails.length).toEqual(3);
        expect(componentInstance.confirmValues).toEqual({somename: ''});
      })
    })
  })
});
