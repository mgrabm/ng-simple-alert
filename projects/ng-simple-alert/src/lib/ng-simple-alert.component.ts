import { Component, OnInit } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { AlertMessage, NgSimpleAlertService } from './ng-simple-alert.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-alert',
  templateUrl: './ng-simple-alert.component.html',
  styleUrls: ['./ng-simple-alert.component.scss']
})
export class NgSimpleAlertComponent implements OnInit {
  alertMessage$: Observable<AlertMessage | boolean>;
  close$ = new Subject<boolean>();

  constructor(private alertService: NgSimpleAlertService) {}

  ngOnInit() {
    this.alertMessage$ = merge(this.alertService.alertMessage$, this.close$);
    console.log(this.alertMessage$);
  }

  closeAlert(): void {
    this.close$.next();
  }
}
