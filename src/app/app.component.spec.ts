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

  it('Test accessing the form control from form group', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const usernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
      usernameElement.value = 'Sai kumar';
      usernameElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const usernameValue: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#usernameValue');
        expect(usernameValue.innerHTML).toEqual('Sai kumar');
        expect(usernameValue.innerHTML).toEqual(componentInstance.loginFormGroup.get('username')?.value);
      })
    })
  })
});
