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

  it('checking the whole dynamic updation of validations for a form control', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const inputElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
      inputElement.value = '';
      inputElement.dispatchEvent(new Event('input'));

      const errorElement: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#errorHandler');
      expect(errorElement).toBeNull();

      expect(componentInstance.username.errors).toBeNull();

      const buttonId: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#buttonId');
      buttonId.click();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const errorElementUpdated: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#errorHandler');
        expect(errorElementUpdated).not.toBeNull();
        expect(errorElementUpdated.children.length).toEqual(1);
        expect(errorElementUpdated.children[0].innerHTML).toEqual('username is required');
      })
    })
  })
});
