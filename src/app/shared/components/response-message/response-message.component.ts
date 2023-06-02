import { Component, Input, OnChanges, OnInit } from '@angular/core';
import Utils from '../../services/common/utils';

@Component({
  selector: 'app-response-message',
  templateUrl: './response-message.component.html',
  styleUrls: ['./response-message.component.scss']
})
export class ResponseMessageComponent implements OnInit, OnChanges {
  @Input() message = 'SUCCESS';
  @Input() type = ''; // Other types are SUCCESS, ERROR, INFO, WARNING
  @Input() showCloseButton = false;
  @Input() allowAutoClose = false;
  @Input() autoCloseTime = 5000;
  @Input() allowHTML = false;

  public messageType = 'success';
  public isHTMLContent = false;

  constructor() {
  }

  ngOnInit() {
    // DO NOT MOVE - The below has to be on Init only
    this.messageType = this.type.toLocaleLowerCase();
    if (this.type === 'SUCCESS') {
      this.showCloseButton = false;
      this.allowAutoClose = true;
    } else if (this.type === 'ERROR') {
      this.showCloseButton = true;
      this.allowAutoClose = false;
    }
    this.isHTMLContent = this.allowHTML;
    this.onTextChanged();
  }

  ngOnChanges() {
    this.onTextChanged();
  }

  onTextChanged() {
    /*
    if (Utils.isValidInput(this.message)) {
      try {
        document.getElementById("resultMessageComponent").scrollIntoView();
        document.getElementById("resultMessageComponent").focus();
      } catch (e) {
      }
    }
    */
    if (this.allowAutoClose === true) {
      if (Utils.isValidInput(this.message)) {
        setTimeout(() => {
          this.clearMessage();
        }, this.autoCloseTime);
      }
    }
  }

  clearMessage() {
    this.message = '';
  }

  isValidMessage() {
    return Utils.isValidInput(this.message);
  }
}
