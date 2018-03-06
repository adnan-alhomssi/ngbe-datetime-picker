import {NgModule} from '@angular/core';

import {NgbeDatetimePickerComponent} from './datetime-picker.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ClickOutsideModule} from 'ng4-click-outside';
import {NgbDateAdapter, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateNativeAdapter} from './ngb-date-native.adapter';

@NgModule({
  declarations: [NgbeDatetimePickerComponent],
  imports: [FormsModule, BrowserModule, ClickOutsideModule, NgbModule],
  providers: [
    {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter},
  ],
  exports: [NgbeDatetimePickerComponent]
})
export class NgbeDatetimePickerModule {
}
