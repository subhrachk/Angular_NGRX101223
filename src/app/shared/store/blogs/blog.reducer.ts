import { createReducer, on } from "@ngrx/store";
import { bloginitialState, BlogType } from './blog.state';
import { addblog,updateBlog,deleteBlog,loadblogs,loadblogsuccess, loadblogsfailure, addblogsuccess } from './blog.action';



export const blogReducer = createReducer(
    bloginitialState,
    on(loadblogs,(state,action) =>(state)),
    on(loadblogsuccess,(state,action)=>{
        return {...state, BlogList : [...action.BlogList],ErrorMessage:''}
    }),
    on(loadblogsfailure,(state,action)=>{
        return {...state, BlogList : [],ErrorMessage:action.Errortext}
    }),
    on(addblog,(state,action)=>{    
        return {...state}
    }),
    on(addblogsuccess,(state,action)=>{    
        return {...state, BlogList : [...state.BlogList,action.Blog],ErrorMessage:''}
    }),
    on(updateBlog,(state,action)=>{
        const bloglist : BlogType[] = state.BlogList.map(blog => {
            if(blog.id !== action.blog.id) {
                return blog;
            }
            return {id : blog.id, title : action.blog.title, description : action.blog.description};
        });
        return {...state, BlogList : bloglist};
    }),
    on(deleteBlog,(state,action)=>{
        const bloglist : BlogType[] = state.BlogList.filter(blog => blog.id !== action.blogid);
        return {...state, BlogList : bloglist};
    }),
);