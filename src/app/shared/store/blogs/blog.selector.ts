import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Blogs,BlogType } from "./blog.state";


const featureBlogselect = createFeatureSelector<Blogs>('Blogs');


export const selectBlogs = createSelector(featureBlogselect,state=>state.BlogList);
export const selectBlogbyId = (blogid : number) => createSelector(featureBlogselect,state=>state.BlogList
    .find((x:BlogType) => x.id === blogid));