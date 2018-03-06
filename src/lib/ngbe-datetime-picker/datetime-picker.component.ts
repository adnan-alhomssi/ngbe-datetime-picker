import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbeDatetimePickerButtonInterface} from './datetime-picker.interface';

@Component({
  selector: 'ngbe-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.scss']
})
export class NgbeDatetimePickerComponent implements OnInit {

  @Input()
  public value: Date;

  @Output()
  public valueChange = new EventEmitter();

  @Input()
  public showPopup = false;

  @Output()
  public popupClosed = new EventEmitter();

  @Input()
  public showSeconds = true;

  @Input()
  public nowButton: NgbeDatetimePickerButtonInterface;

  @Input()
  public clearButton: NgbeDatetimePickerButtonInterface;

  @Input()
  public closeButton: NgbeDatetimePickerButtonInterface;

  public localValue: Date = null;

  public localDate: Date = null;

  public localTime: { hour, minute, second } = null;

  ngOnInit() {
  }
  public ngOnChanges(changes: any) {

    if (!this.nowButton) {
      this.nowButton = {show: true, label: 'Now', cssClass: 'btn btn-secondary btn-sm'};
    }

    if (!this.clearButton) {
      this.clearButton = {show: true, label: 'Clear', cssClass: 'btn btn-secondary btn-sm'};
    }

    if (!this.closeButton) {
      this.closeButton = {show: true, label: 'Close', cssClass: 'btn btn-secondary btn-sm'};
    }

    // user maybe typing a value into an input box, so would come in as string
    if (typeof this.value === 'string') {
      // check if the string is a valid date
      if (!isNaN(new Date(this.value).getTime())) {
        this.localValue = new Date(this.value);
      }
    } else if (this.value) {
      this.localValue = this.value;
    }

    this.localDate = this.localValue;
    this.localTime = this.convertDateToNgbTimeStruct(this.localValue);
  }

  public offClick() {
    this.showPopup = false;
    this.popupClosed.emit(true);
  }

  public onNow() {
    this.localValue = new Date();
    this.onPickerChange();
  }

  public onPickerChange() {
    this.valueChange.emit(this.localValue);
  }

  public toggle() {
    if (this.showPopup) {
      this.showPopup = false;
    } else {
      this.showPopup = true;
    }
  }

  public updateDate() {
    this.localValue.setFullYear(this.localDate.getFullYear());
    this.localValue.setMonth(this.localDate.getMonth());
    this.localValue.setDate(this.localDate.getDate());
    this.valueChange.emit(this.localValue.toISOString());
  }

  public updateTime() {
    this.convertNgbTimeStructToDate(this.localValue);
    this.valueChange.emit(this.localValue.toISOString());
  }

  private convertNgbTimeStructToDate(date) {
    date.setHours(this.localTime.hour);
    date.setMinutes(this.localTime.minute);
    date.setSeconds(this.localTime.second);
  }

  private convertDateToNgbTimeStruct(date) {
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  }
}
