import { MaterialModule } from 'src/app/shared/modules/predefined/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoaderService } from './app-loader.service';
import { AppLoaderComponent } from './app-loader.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    providers: [AppLoaderService],
    declarations: [AppLoaderComponent]
})
export class AppLoaderModule { }
