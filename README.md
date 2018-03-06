# ng-bootsrap Date+Time picker extension 

 [ng-bootstrap](https://ng-bootstrap.github.io) port of Bootstrap into Angular *5+* world comes with a datepicker and timepicker, but a component that combines both is sadly not in the box!
 
 This component combines both in a popup window and returns a single native Javascript Date object. 

[Home / demo page](http://adnan.space/ngbe-datetime-picker/)

# Install
It requires (for sure) @ng-bootstrap/ng-bootstrap version ^1.0.0 and bootstrap ^4
`npm install --save ngbe-datetime-picker`

# Usage
First, import the NgbeDatetimePickerModule module into your own module
```javascript
@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...,
    NgbeDatetimePickerModule,
    ...
  ],
  providers: [...],
  bootstrap: [...]
})
```

Add the datetime-picker tag where you want the popup to appear

```html
<ngbe-datetime-picker [(value)]="demoDate" (valueChange)="valueChanged($event)" (popupClosed)="popupClosed($event)" #dtp></ngbe-datetime-picker>
<button (click)="dtp.toggle()">toggle</button>
```

`#dtp` is a [local variable](https://angular.io/guide/component-interaction#parent-listens-for-child-event) assigned to this component instance so it can be controlled from outside
`.toggle()` is the only provided public function. 

### Inputs

| Inputs      | Note           |
| ------------- |:-------------:| 
| *value*         | Date object |
| showPopup         | boolean |
| showSeconds         | boolean, default =  true|
| nowButton         | :NgbeDatetimePickerButtonInterface|
| clearButton         | :NgbeDatetimePickerButtonInterface |
| closeButton         | :NgbeDatetimePickerButtonInterface |

NgbeDatetimePickerButtonInterface gives you the possibility to customize the buttons by passing an instance
with
```javascript
   show: boolean;
   label: string;
   cssClass: string;
```
the default css class is 'btn btn-secondary btn-sm' and the names are in english


### Outputs
| Outputs | Note           |
| ------------- |:-------------:| 
| value         | Date object |
| valueChange | triggered whenever time or date changes with the date as payload |
| popupClosed | by clicking outside the popup window (using ng-) or close button| 


