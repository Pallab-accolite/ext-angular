declare var Ext: any;
import { Component } from '@angular/core';

@Component({
  selector: 'basic-date-panel-component',
  templateUrl: "./BasicDate.html",
  styles: [``]
})

export class BasicDatePanelComponent {

  isPhone:boolean = Ext.os.is.Phone;

}
