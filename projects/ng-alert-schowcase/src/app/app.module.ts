import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgSimpleAlertComponent } from '../../../ng-simple-alert/src/lib/ng-simple-alert.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, NgSimpleAlertComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
