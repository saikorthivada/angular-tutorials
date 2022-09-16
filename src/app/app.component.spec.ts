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

  it('Accessing child variable i.e.. Title on button click', waitForAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#child_title_access');
      button.click();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const paras: HTMLParagraphElement[] = fixture.debugElement.nativeElement.querySelectorAll('#title_id');
        expect(paras.length).toEqual(3);
        expect(paras[0].innerHTML).toEqual(`title - Child 1`);
        expect(paras[1].innerHTML).toEqual(`title - Child 2`);
        expect(paras[2].innerHTML).toEqual(`title - Child 3`);
      })
    })
  }))

  it('Accessing child para using a method of child', waitForAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const btn: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#method_access');
      btn.click();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const paras: HTMLParagraphElement[] = fixture.debugElement.nativeElement.querySelectorAll('#title_id');
        expect(paras.length).toEqual(3);
        expect(paras[0].innerHTML).toEqual(`title - Child`);
        expect(paras[1].innerHTML).toEqual(`title - Child method 2`);
        expect(paras[2].innerHTML).toEqual(`title - Child`);
      })
    })
  }))
});
