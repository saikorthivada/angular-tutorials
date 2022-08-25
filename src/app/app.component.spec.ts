import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

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
        AppComponent,
        ChildComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    componentInstance = fixture.componentInstance;
  });

  it('Meters value passed from two way binding to ng changes', () =>{
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#modelValue');
      element.value = '10';
      element.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {

        const resultElement: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#result');
        expect(resultElement.innerHTML).toEqual(`Meters into centimeters - 1000`);
      })
    })
  })
});
