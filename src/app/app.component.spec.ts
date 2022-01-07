import {  ComponentFixture, TestBed } from '@angular/core/testing';
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

  it('check mark as touched and validate the input field', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const btnElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#btn');
      const errorElement: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#errorMessages');
      expect(errorElement).toBeNull();
      btnElement.click();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const errorElement: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#errorMessages');
        expect(errorElement).not.toBeNull();
        expect(errorElement.children.length).toEqual(1);
        expect(errorElement.children[0].innerHTML).toEqual('This field is required');
      })
    })
  })
});
