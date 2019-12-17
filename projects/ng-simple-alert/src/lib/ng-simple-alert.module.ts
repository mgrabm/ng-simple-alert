import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSimpleAlertComponent } from './ng-simple-alert.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgSimpleAlertComponent],
  exports: [NgSimpleAlertComponent]
})
export class NgSimpleAlertModule {}
