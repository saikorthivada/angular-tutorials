import { AppLoaderService } from './../../components/componentsAsService/app-loader/app-loader.service';
import { Injectable, Injector, OnInit } from '@angular/core';
import Utils from './utils';
import { GlobalVariables } from './globalVariables';
import { Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormArray, UntypedFormControl, AbstractControl, FormGroup } from '@angular/forms';

@Injectable()
export class BaseClass implements OnInit {

  public pageLoaded = false;

  constructor(
  ) {
    this.pageLoaded = false;
  }

  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit() {
    window.scrollTo(0, 0);
  }
  isValidInput(input: any) {
    return Utils.isValidInput(input);
  }

  /**
   * Validates any form fields present Group form
   * @param groupName Group name should be a Group name passed from UI
   * @param fieldName field name should be a form control name passed from UI
   */
  isValidField(groupName: FormGroup, fieldName: string) {
    if (groupName.get(fieldName)?.invalid && (groupName.get(fieldName)?.touched || groupName.get(fieldName)?.dirty)) {
      return true;
    }
    return false;
  }

  // to validate either formArray, formControl, FormGroup.
  // tslint:disable-next-line:variable-name
  getErrorMessage(formGroup: FormGroup, validation_messages: any, validation_item: string): string {
    let message = '';
    const keys = Object.keys(formGroup.controls);
    const index = keys.indexOf(validation_item);
    if (index !== -1) {
      const control = formGroup.get(keys[index]);
      if (control instanceof UntypedFormControl) {
        message = this.getControlErrorMessage(control, validation_messages, validation_item);
      }
    } else {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < keys.length; i++) {
        const control = formGroup.get(keys[i]);
        if (control instanceof UntypedFormGroup) {
          this.getErrorMessage(control, validation_messages, validation_item);
        } else if (control instanceof UntypedFormArray) {
          message = this.validateFormArray(control, validation_messages, validation_item);
          break;
        }
      }
    }
    return message;
  }
  // to validate form array
  // tslint:disable-next-line:variable-name
  private validateFormArray(formControl: any, validation_messages: any, validation_item: string) {
    let message = '';
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < formControl.controls.length; i++) {
      message = this.getErrorMessage(formControl.controls[i], validation_messages, validation_item);
      if (message !== '') {
        break;
      }
    }
    return message;
  }

  // returns the error particular message configured in form.
  // tslint:disable-next-line:variable-name
  private getControlErrorMessage(control: any, validation_messages?: any, validation_item?: any) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < validation_messages[validation_item].length; i++) {
      if (control.hasError(validation_messages[validation_item][i].type)) {
        return validation_messages[validation_item][i].message;
      }
    }
  }


  findInvalidControls(formObject: any) {
    const invalid = [];
    const controls = formObject.controls;
    for (const name in controls) {
      if (controls[name].invalid || controls[name].hasError('notValid')) {
        invalid.push(name);
      }
    }
    Utils.log('Invalid Controls: ' + Utils.stringify(invalid));
  }

  /**
   * Allow only number event
   * @param event Keyboard event
   */
  onlyNumber(event: any) {
    return event.keyCode >= 48 && event.keyCode <= 57;
  }

  /**
   * Allow with decimals
   * @param event Keyboard event
   */
  allowNumberAndDot(event: any) {
    return (event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode === 46;
  }
}
