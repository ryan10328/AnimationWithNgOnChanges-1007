import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obj: any = {
    num: 0
  };

  plus() {
    this.obj.num++;
  }

  minus() {
    this.obj.num--;
  }

}
