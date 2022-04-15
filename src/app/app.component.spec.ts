import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let instance: AppComponent;
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
    instance = fixture.componentInstance;
  });

  it('Test form arrays with form controls', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const control1: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#control_0');
      const control2: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#control_1');

      control1.value = 'Sample 1';
      control2.value = 'Sample 2';

      control1.dispatchEvent(new Event('input'));
      control2.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const cititesFormArrayValues = instance.cities.value;
        expect(cititesFormArrayValues[0]).toEqual('Sample 1');
        expect(cititesFormArrayValues[1]).toEqual('Sample 2');
        expect(cititesFormArrayValues).toEqual(['Sample 1', 'Sample 2']);
      })
    })
  })


  it('Form array push event', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const spyOnBtn = spyOn(instance, 'addFormControl').and.callThrough();
      const btn: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#addBtn');

      btn.click();
      expect(spyOnBtn).toHaveBeenCalledTimes(1);
      expect(instance.cities.controls.length).toEqual(3);

      btn.click();
      expect(spyOnBtn).toHaveBeenCalledTimes(2);
      expect(instance.cities.controls.length).toEqual(4);
    })
  })

  it('Form array remove method or event', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const deleteSpyOn= spyOn(instance, 'removeFormControl').and.callThrough();
      expect(instance.sampleData.length).toEqual(0);
      const deleteBtn = fixture.debugElement.nativeElement.querySelector('#dltBtn_1');
      deleteBtn.click();
      expect(deleteSpyOn).toHaveBeenCalledTimes(1);
      expect(instance.cities.length).toEqual(1);
      expect(instance.sampleData.length).toEqual(1);
    })
  })
});
