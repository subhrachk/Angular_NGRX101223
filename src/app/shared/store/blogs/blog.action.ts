import { createAction, props } from "@ngrx/store";
import { BlogInput } from "./blog.state";


export const loadBlog = createAction("loadBlog")
export const addBlog = createAction("addBlog",props<{blog : BlogInput}>());
export const updateBlog = createAction("updateBlog",props<{blog : BlogInput}>());
export const deleteBlog = createAction("deleteBlog",props<{blogid : number}>());