import {Component} from '@angular/core';

@Component({
  selector: 'ngbe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Datetime picker demo';
  demoDate: Date = new Date();

  valueChanged(newDate) {
    console.log(newDate);
  }

  popupClosed(status) {
    console.log(status);
  }
}
