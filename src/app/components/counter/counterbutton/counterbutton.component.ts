import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { channelnamechangeaction, counterdecrement, counterincrement, counterreset } from '../../../shared/store/counter/counter.action';
import { countertype } from '../../../shared/store/counter/counter.state';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css']
})
export class CounterbuttonComponent {

  constructor(private store : Store<{Counter : countertype}>) {}

  onIncrementCounter() {
    this.store.dispatch(counterincrement());
  }
  onReset() {
    this.store.dispatch(counterreset());
  }
  onDecrementCounter() {
    this.store.dispatch(counterdecrement());
  }

  onrenamechannel() {
    this.store.dispatch(channelnamechangeaction({channelname: 'Welcome to Dishum Tech'}));
  }
}
