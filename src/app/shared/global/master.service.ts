import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BlogInput, BlogType } from '../store/blogs/blog.state';

@Injectable({providedIn : 'root'})

export class MasterService {

    constructor(private http : HttpClient) {}

    GetAllBlogs() {
        return this.http.get<BlogType[]>('http://localhost:4100/Blogs');
    }

    CreateBlog(Blog : BlogInput) {
        return this.http.post<BlogType>('http://localhost:4100/Blogs',Blog);
    }
}