import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { customcounteraction } from "../../../shared/store/counter/counter.action";
import { countertype } from "../../../shared/store/counter/counter.state";

@Component({
    selector : 'app-customcounter',
    templateUrl : './customcounter.component.html',
    styleUrls : ['./customcounter.component.css']
})

export class CustomCounterComponent {

    _custominput : number = 0
    _actiontype : string = '';

    constructor(private store  : Store<{Counter : countertype}>) {}


    submitaction() {
        this.store.dispatch(customcounteraction({custominput: this._custominput, customaction : this._actiontype}))
    }

}