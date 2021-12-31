import { Component } from '@angular/core';
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

  it('Do not show the element or message when user does not enter a meters value', () =>{
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const inputElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#metersId');
      inputElement.value = '';
      inputElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const messageElement: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#message');
        expect(messageElement).toBeNull();
      })
    })
  })

  it('Check when the value of input changes with a valid data', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const inputElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#metersId');
      inputElement.value = '10';
      inputElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const messageElement: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#message');
        expect(messageElement).not.toBeNull();
        expect(messageElement.innerHTML.trim()).toEqual(`${componentInstance.metersControl.value} Meters into ${componentInstance.centimeters} centimeters`)
      })
    })
  })
});
