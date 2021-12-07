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

  it('check the clear validation scenarios', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const usernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#usernameId');
      usernameElement.value = '';
      usernameElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const errorElement: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#usernameErrors');
        expect(errorElement).not.toBeNull();
        expect(errorElement.children.length).toEqual(1);
        expect(errorElement.children[0].innerHTML).toEqual('Username is required');

        const removeButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#removeButton');
        removeButton.click();

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          const errorElementUpdated: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#usernameErrors');
          expect(errorElementUpdated).toBeNull();
        })
      })
    })
  })
});
