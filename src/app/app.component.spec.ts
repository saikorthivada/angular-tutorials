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

  it('Test: Add address checks', ()=> {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const addButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#addAddressId');
      const addAddressSpy = spyOn(componentInstance, 'addAddress').and.callThrough();
      addButton.click();
      expect(addAddressSpy).toHaveBeenCalledTimes(1);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const inputElements: HTMLInputElement[] = fixture.debugElement.nativeElement.querySelectorAll('input');
        expect(inputElements.length).toEqual(14);
        const buttonSubmit: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#submitID');
        expect(buttonSubmit.disabled).toBeTruthy();
      })
    })
  })

  it("Test: Remove address feature", () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const removelElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#remove_address_1');
      const removeAddressSpy = spyOn(componentInstance, 'removeAddress').and.callThrough();
      removelElement.click();
      expect(removeAddressSpy).toHaveBeenCalledTimes(1);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(componentInstance.addressesAsFormArray.length).toEqual(1);
        const objAddresses = componentInstance.obj.addresses.splice(1, 1);
        expect(JSON.stringify(componentInstance.addressesAsFormArray.value)).toEqual(JSON.stringify(componentInstance.obj.addresses));
      })
    })
  })

});
