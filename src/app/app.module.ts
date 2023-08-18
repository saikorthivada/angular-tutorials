import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';

@NgModule({
  declarations: [
    AppComponent,
    SenderComponent,
    ReceiverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
