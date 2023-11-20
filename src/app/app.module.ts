import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './common/modules/material/material.module';
import { PreDefinedModule } from './common/modules/pre-defined/pre-defined.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { TopBarComponent } from './common/components/top-bar/top-bar.component';
import { UserDefinedModule } from './common/modules/user-defined/user-defined.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PreDefinedModule,
    UserDefinedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
