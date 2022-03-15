import { ComponentFixture, TestBed } from '@angular/core/testing';
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

  it("check setValue", () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const usernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
      usernameElement.value = 'sample@gmail.com';
      usernameElement.dispatchEvent(new Event('input'));

      const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
      passwordElement.value = 'samplePassword';
      passwordElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(componentInstance.resetFornGroup.get('username')?.value).toEqual('sample@gmail.com');
        expect(componentInstance.resetFornGroup.get('password')?.value).toEqual('samplePassword');
        const mockFunction = spyOn(componentInstance, 'resetForm').and.callThrough();
        const btnElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#resetBtn');
        btnElement.click();
        expect(mockFunction).toHaveBeenCalledTimes(1);
        expect(componentInstance.resetFornGroup.get('username')?.value).toEqual(componentInstance.defaultFormValues.username);
        expect(componentInstance.resetFornGroup.get('password')?.value).toEqual(componentInstance.defaultFormValues.password);

      })
    })
  })
});
