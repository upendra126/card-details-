import { Component } from '@angular/core';
import { Pay } from './pay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'card';

    payModel = new Pay('','','');
 
  onSubmit() {
    console.log(this.payModel);

    var data = this.payModel;
    console.log(data);
    
  }
}
