import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../../global/master.service";
import { LOAD_BLOGS, addblog, addblogsuccess, loadblogs, loadblogsfailure, loadblogsuccess } from "./blog.action";
import { EMPTY, catchError, exhaustMap, map, of, switchMap, pipe } from 'rxjs';

@Injectable({providedIn : 'root'})

export class BlogEffects {
    constructor(private action$ : Actions,
                private masterService : MasterService) {}

    _selectblogs = createEffect(()=>
        this.action$.pipe(
            ofType(LOAD_BLOGS),
            exhaustMap((action)=>{
                return this.masterService.GetAllBlogs().pipe(
                    map(data => loadblogsuccess({BlogList : data})
                    ),
                    catchError((_error)=>of(loadblogsfailure({Errortext: _error.message})))
                )
            })
        )
    );

    _createblog = createEffect(()=>
            this.action$.pipe(
                ofType(addblog),
                exhaustMap((action)=>{
                    return this.masterService.CreateBlog(action.blog).pipe(
                        map(data => addblogsuccess({Blog : data})
                        ),
                    //).pipe(map(res => loadblogs()),
                    catchError((_error)=>of(loadblogsfailure({Errortext: _error.message}))))
                })
            )
    )
}