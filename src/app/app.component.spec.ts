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

  it('H1 should be updated when child component sends data', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const inputElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#modelId_child');
      inputElement.value = 'Sample data';
      inputElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const btnElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#send_btn_child');
        btnElement.click();

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          const headingElement: HTMLHeadingElement = fixture.debugElement.nativeElement.querySelector('#heading_parent');
          expect(headingElement.innerHTML).toEqual(`Output Decorator - Sample data`)
        })

      })
    })
  })
});
