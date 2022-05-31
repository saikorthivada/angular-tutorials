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

  it('value with default object check', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const elements: HTMLInputElement[] = fixture.debugElement.nativeElement.querySelectorAll('input');
      expect(elements.length).toEqual(10);
      expect(JSON.stringify(componentInstance.obj)).toEqual(JSON.stringify(componentInstance.registerAddress.value));

      expect(componentInstance.addressesAsFormArray.length).toEqual(componentInstance.obj.addresses.length);
      expect(JSON.stringify(componentInstance.addressesAsFormArray.value)).toEqual(JSON.stringify(componentInstance.obj.addresses));
    })
  })

});
