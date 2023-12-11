import { createAction, props } from "@ngrx/store";


export const counterincrement = createAction("[counterincrement Counter Componenet");
export const counterdecrement = createAction("[counterdecrement Counter Componenet");
export const counterreset = createAction("[counterreset Counter Componenet");
export const customcounteraction = createAction("[customcounteraction Counter Componenet",props<{custominput : number, customaction : string}>());
export const channelnamechangeaction = createAction("[channelnamechangeaction Counter Componenet",props<{channelname : string}>());