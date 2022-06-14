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

  it('Validate email not found', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const emailElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#emailID');
      emailElement.value = '';
      emailElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const requiredEmailElement: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#emailRequired');
        expect(requiredEmailElement).not.toBeNull();
        expect(requiredEmailElement.innerHTML).toEqual('This is required');
        expect(componentInstance.registerAddress.get('email')?.value).toEqual('');
        expect(componentInstance.registerAddress.get('email')?.errors).not.toBeNull();
        expect(componentInstance.registerAddress.get('email')?.errors?.required).toBeTruthy();
      })
    })
  })

  it('test form array addresses', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      componentInstance.addressesAsFormArray.get('0')?.get('cityName')?.setValue('');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(componentInstance.registerAddress.invalid).toBeTruthy();
        expect(componentInstance.addressesAsFormArray.get('0')?.get('cityName')?.errors).not.toBeNull();
        expect(componentInstance.addressesAsFormArray.get('0')?.get('cityName')?.errors?.required).toBeTruthy();

      })
    })
  })

});
