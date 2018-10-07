import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {oddsAnimation} from '../utils/animations';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  animations: [oddsAnimation]
})

export class ChildComponent implements OnInit, OnChanges {
  @Input() num: any;
  state = '-';

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.num.currentValue > changes.num.previousValue) {
      console.log('plus');
      this.state = 'plus';
    } else if (changes.num.currentValue < changes.num.previousValue) {
      console.log('minus');
      this.state = 'minus';
    } else {
      this.state = '-';
    }
  }

  handleDone(evt) {
    if (this.state !== '-' && this.state === evt.toState) {
      this.state = '-';
    }
  }
}
