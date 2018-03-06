import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {NgbeDatetimePickerModule} from '../lib/ngbe-datetime-picker';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ClickOutsideModule} from 'ng4-click-outside';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    NgbeDatetimePickerModule,
    ClickOutsideModule,
    BrowserModule,
    FormsModule
  ],
  providers: [FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {
}
