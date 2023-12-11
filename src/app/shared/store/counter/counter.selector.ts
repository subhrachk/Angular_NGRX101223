import { createFeatureSelector, createSelector } from "@ngrx/store";
import { countertype } from "./counter.state";

const counterSelfeature = createFeatureSelector<countertype>('Counter');

export const counterSelect = createSelector(counterSelfeature,state => state.counter);
export const channelSelect = createSelector(counterSelfeature,state => state.channelname);