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

  it('check the form values in the form with ngmodel controller values', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {

      const loginSubmitMock = spyOn(componentInstance, 'loginSubmit').and.callThrough();
      const usernameElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#usernameId');
      usernameElement.value = 'usernameSample';
      usernameElement.dispatchEvent(new Event('input'));

      const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#passwordId');
      passwordElement.value = 'passwordsample';
      passwordElement.dispatchEvent(new Event('input'));

      const submitBtnElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#buttonId');
      submitBtnElement.click();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(componentInstance.loginFormObj.username).toEqual('usernameSample');
        expect(componentInstance.loginFormObj.password).toEqual('passwordsample');
        expect(loginSubmitMock).toHaveBeenCalled();
      })
    })
  })

  it('update login object in the controller and check html element content', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      componentInstance.loginFormObj.username = 'sai kumar';
      componentInstance.loginFormObj.password = 'sai@1234';
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const usernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#usernameId');
        const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#passwordId');

        expect(usernameElement.value).toEqual('sai kumar');
        expect(passwordElement.value).toEqual('sai@1234');
      })
    })
  })
});
