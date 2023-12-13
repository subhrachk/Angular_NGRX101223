import { createAction, props } from "@ngrx/store";
import { BlogInput, BlogType } from './blog.state';

export const LOAD_BLOGS="[load Blog] Blog Component";
export const LOAD_BLOGS_SUCCESS="[load Blog Success] Blog Component";
export const LOAD_BLOGS_FAILURE="[load Blog Failure] Blog Component";

export const loadblogs = createAction(LOAD_BLOGS);
export const loadblogsuccess = createAction(LOAD_BLOGS_SUCCESS,props<{BlogList : BlogType[]}>());
export const loadblogsfailure = createAction(LOAD_BLOGS_FAILURE,props<{Errortext:string}>());

export const ADD_BLOG="[Add Blog] Blog Component";
export const ADD_BLOG_SUCCESS="[Add Blog Success] Blog Component";
export const ADD_BLOG_FAILURE="[Add Blog Failure] Blog Component";

export const addblog = createAction(ADD_BLOG,props<{blog : BlogInput}>());
export const addblogsuccess = createAction(ADD_BLOG_SUCCESS,props<{Blog : BlogType}>());
export const addblogsfailure = createAction(ADD_BLOG_FAILURE,props<{Errortext:string}>());

//export const addBlog = createAction("addBlog",props<{blog : BlogType}>());


export const updateBlog = createAction("updateBlog",props<{blog : BlogType}>());
export const deleteBlog = createAction("deleteBlog",props<{blogid : number}>());