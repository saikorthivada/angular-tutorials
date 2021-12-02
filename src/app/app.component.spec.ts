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

  it('check the input value change which should change the form control', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const usernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
      usernameElement.value = 'sai@gmail.com';
      usernameElement.dispatchEvent(new Event('input'));
      expect(componentInstance.username.value).toEqual('sai@gmail.com');
      const button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#buttonID');
      button.click();
      expect(componentInstance.username.value).toEqual('dynamic value');

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const updatedUsername: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
        expect(updatedUsername.value).toEqual('dynamic value');
      })
    })
  })

});
