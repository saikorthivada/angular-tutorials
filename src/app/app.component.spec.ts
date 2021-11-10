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

  it('username and password validation for required field', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const usernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
      const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
      const genderElement: HTMLSelectElement = fixture.debugElement.nativeElement.querySelector('#gender');

      usernameElement.dispatchEvent(new Event('foucs'));
      usernameElement.dispatchEvent(new Event('blur'));

      passwordElement.dispatchEvent(new Event('focus'));
      passwordElement.dispatchEvent(new Event('blur'));

      genderElement.dispatchEvent(new Event('focus'));
      genderElement.dispatchEvent(new Event('blur'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const usernameErrors: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#usernameErrors');
        const passwordErrors: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#passwordErrors');
        const genderErrors: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#genderErrors');
        const submitButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#submitButton');

        expect(usernameErrors.children.length).toEqual(1);
        expect(usernameErrors.children[0].innerHTML).toEqual('This field required');

        expect(passwordErrors.children.length).toEqual(1);
        expect(passwordErrors.children[0].innerHTML).toEqual('This field required');

        expect(genderErrors.children.length).toEqual(1);
        expect(genderErrors.children[0].innerHTML).toEqual('This field required');

        expect(submitButton.disabled).toBeTruthy();
      })
    })
  })

  it('username and password validation with patterns', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const usernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
      const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
      
      usernameElement.value = 'sai@gmail';
      passwordElement.value = 'sai&';

      usernameElement.dispatchEvent(new Event('input'));
      passwordElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const usernameErrors: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#usernameErrors');
        const passwordErrors: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#passwordErrors');
        const submitButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#submitButton');

        expect(usernameErrors.children.length).toEqual(1);
        expect(usernameErrors.children[0].innerHTML).toEqual('Please enter a valid email pattern');

        expect(passwordErrors.children.length).toEqual(1);
        expect(passwordErrors.children[0].innerHTML).toEqual('This field should have min of 5 char and 1 alphabet, 1 numeric and atleast 1 special char');
      
        expect(submitButton.disabled).toBeTruthy();
      })
    })
  })

  it('check validity for entire proper data ', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const usernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
      const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
      const genderElement: HTMLSelectElement = fixture.debugElement.nativeElement.querySelector('#gender');

      usernameElement.value = 'sai@gmail.com';
      passwordElement.value = 'sai@123';
      genderElement.value = 'female';

      usernameElement.dispatchEvent(new Event('input'));
      passwordElement.dispatchEvent(new Event('input'));
      genderElement.dispatchEvent(new Event('change'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const usernameErrors: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#usernameErrors');
        const passwordErrors: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#passwordErrors');
        const genderErrors: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#genderErrors');
        const submitButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#submitButton');

        expect(usernameErrors).toBeNull();
        expect(passwordErrors).toBeNull();
        expect(genderErrors).toBeNull();

        expect(submitButton.disabled).toBeFalsy();

        expect(componentInstance.registerObj.username).toEqual('sai@gmail.com');
        expect(componentInstance.registerObj.password).toEqual('sai@123');
        expect(componentInstance.registerObj.gender).toEqual('female');
      })
    })
  })
});
