import { NgModule } from '@angular/core';

// Custom Directives
import { TrimOnBlurDirective } from '../../directives/ng-trim.directive';
import { AppLoaderModule } from '../../components/componentsAsService/app-loader/app-loader.module';
import { AppDialogModule } from '../../components/componentsAsService/app-dialog/app-dialog.module';
import { AppConfirmModule } from '../../components/componentsAsService/app-confirm/app-confirm.module';
import { ResponseMessageComponent } from '../../components/response-message/response-message.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TrimOnBlurDirective,
    ResponseMessageComponent
  ],
  imports: [
    CommonModule,
    AppConfirmModule,
    AppDialogModule,
    AppLoaderModule,
  ],
  exports: [
    TrimOnBlurDirective,
    ResponseMessageComponent
  ]
})
export class CustomModule { }
