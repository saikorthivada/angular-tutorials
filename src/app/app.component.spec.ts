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

  it('Change title property from parent using view child', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const propert_change_btn: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#propert_change_btn');
      propert_change_btn.click();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const title_child: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#title_child');
        expect(title_child.innerHTML).toEqual('title - Updated from parent component')
      })
    })
  });

  it('Change title value in child component by accessing the method of child component', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const method_change_btn: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#method_change_btn');
      method_change_btn.click();

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const title_child: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#title_child');
        expect(title_child.innerHTML).toEqual('title - Im able to access the child method');
      })
    })
  })
});
