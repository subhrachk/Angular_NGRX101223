import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogType } from '../../../shared/store/blogs/blog.state';
import { selectBlogs } from '../../../shared/store/blogs/blog.selector';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NewblogComponent } from '../newblog/newblog.component';
import { loadblogs } from '../../../shared/store/blogs/blog.action';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent {

  BlogList$ !: Observable<BlogType[]>;

  constructor(private store : Store<{BlogList : BlogType[]}>,
              private dialog : MatDialog) {
    this.store.dispatch(loadblogs());
    this.BlogList$ = store.select(selectBlogs);
  }

  deleteBlog(id : number) {
    this.opennewedit(id,"Delete Blog",'delete');
  }

  opennewblog() {
    this.opennewedit(0,'Add Blog','add');
  }

  editBlog(id : number) {
    this.opennewedit(id,"Edit Blog",'edit');
  }

  opennewedit(id : number, actiontitle : string, actiontype : string) {
    this.dialog.open(NewblogComponent,{width : '40%', data : {id : id, actiontitle : actiontitle, actiontype : actiontype}});
  }

}
