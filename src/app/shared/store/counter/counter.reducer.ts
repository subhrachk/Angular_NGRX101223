import { createReducer, on } from "@ngrx/store";
import { counterinitialState } from './counter.state';
import { channelnamechangeaction, counterdecrement, counterincrement, counterreset, customcounteraction } from "./counter.action";



export const counterReducer = createReducer(
    counterinitialState,
    on(counterincrement,(state,action)=>({...state, counter : state.counter + 1})),
    on(counterdecrement,(state,action)=>({...state, counter : state.counter - 1})),
    on(customcounteraction,(state,action)=>(
        {...state, 
            counter : action.customaction ==='inc' ? state.counter + +action.custominput : state.counter - +action.custominput
        })),
    on(channelnamechangeaction,(state,action)=>(
        {...state, 
            channelname : action.channelname
        })),
    on(counterreset,(state,action)=>(counterinitialState))
)