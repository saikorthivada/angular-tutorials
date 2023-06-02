import { SharedModule } from './../../../shared.module';
import { NgModule } from '@angular/core';
import { AppDialogComponent } from './app-dialog.component';
import { AppDialogService } from './app-dialog.service';
import { MaterialModule } from 'src/app/shared/modules/predefined/material/material.module';

@NgModule({
    imports: [
        MaterialModule
    ],
    exports: [AppDialogComponent],
    declarations: [AppDialogComponent],
    providers: [AppDialogService]
})
export class AppDialogModule { }
