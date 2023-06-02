import { SharedModule } from './../../../shared.module';
import { NgModule } from '@angular/core';

import { AppConfirmComponent } from './app-confirm.component';
import { AppConfirmService } from './app-confirm.service';
import { MaterialModule } from 'src/app/shared/modules/predefined/material/material.module';

@NgModule({
    imports: [
        MaterialModule
    ],
    exports: [AppConfirmComponent],
    declarations: [AppConfirmComponent],
    providers: [AppConfirmService]
})
export class AppConfirmModule { }
