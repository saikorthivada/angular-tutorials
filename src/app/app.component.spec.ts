import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let componentInstance: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    componentInstance = fixture.componentInstance;
  });

  it('First input field should be focused, even when we have multiple same # varaibles', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(document.activeElement?.id).toEqual('firstElement');
      expect(document.activeElement?.id).not.toEqual('secondElement');
    })
  });

  it('On load the para should be in red color', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() =>{
      const para_element: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#para_element');
      expect(para_element.style.color).toEqual('red');
    })
  })
});
