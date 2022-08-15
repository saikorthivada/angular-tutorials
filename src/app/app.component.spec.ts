import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let componentInstance: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        ChildComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    componentInstance = fixture.componentInstance;
  });

  it('Input default value check', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const childElement: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#childElementID');
      expect(childElement.innerHTML).toEqual(`child works! - ${componentInstance.parentTitle}`);
    })
  });

  it('Update parent value to render in child', () => {
    componentInstance.parentTitle = 'Updated';
    fixture.detectChanges();
    fixture.whenStable().then(() =>{ 
      const childElement: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#childElementID');
      expect(childElement.innerHTML).toEqual(`child works! - Updated`);
    })
  })
});
