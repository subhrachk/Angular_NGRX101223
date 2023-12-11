import { createReducer, on } from "@ngrx/store";
import { bloginitialState, BlogType } from './blog.state';
import { addBlog,updateBlog,deleteBlog,loadBlog } from './blog.action';



export const blogReducer = createReducer(
    bloginitialState,
    on(loadBlog,(state,action) =>(state)),
    on(addBlog,(state,action)=>{
        const newblogid : number = Math.max(...state.BlogList.map(blog => blog.id))+1;
        const newblog : BlogType = {id : newblogid, title : action.blog.title , description : action.blog.description};
        
        console.log(newblog);
        return {...state, BlogList : [...state.BlogList,newblog]}
    }),
);