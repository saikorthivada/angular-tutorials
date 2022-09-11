import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
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

  it('Title check on child component varaible change', waitForAsync(() =>{
    fixture.detectChanges();
    fixture.whenStable().then((() => {
      const titleBtn: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#title_variable_id');
      titleBtn.click();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const paraelements: HTMLParagraphElement[] = fixture.debugElement.nativeElement.querySelectorAll('#title_id');
        expect(paraelements.length).toEqual(3);
        expect(paraelements[0].innerHTML).toEqual(`title - Child 1`);
        expect(paraelements[1].innerHTML).toEqual(`title - Child 2`);
        expect(paraelements[2].innerHTML).toEqual(`title - Child 3`);

      })
    }))
  }))

  it('change title method check from parent using view children', waitForAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const btnElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#access_child_methods');
      btnElement.click();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const paraelements: HTMLParagraphElement[] = fixture.debugElement.nativeElement.querySelectorAll('#title_id');
        expect(paraelements.length).toEqual(3);
        expect(paraelements[0].innerHTML).toEqual(`title - Child`);
        expect(paraelements[1].innerHTML).toEqual(`title - Child method 2`);
        expect(paraelements[2].innerHTML).toEqual(`title - Child`);
      })
    })
  }))
});
