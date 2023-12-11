import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { channelSelect, counterSelect } from '../../../shared/store/counter/counter.selector';
import { countertype } from '../../../shared/store/counter/counter.state';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent {

  counter$? : Observable<number>
  channelname$ !: Observable<string>

  constructor(private store : Store<{Counter : countertype}>) {
    this.channelname$ = store.select(channelSelect);
    this.counter$ = store.select(counterSelect);
  }

}
