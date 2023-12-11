import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogType } from '../../../shared/store/blogs/blog.state';
import { selectBlogs } from '../../../shared/store/blogs/blog.selector';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NewblogComponent } from '../newblog/newblog.component';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent {

  BlogList$ !: Observable<BlogType[]>;

  constructor(private store : Store<{BlogList : BlogType[]}>,
              private dialog : MatDialog) {
    this.BlogList$ = store.select(selectBlogs);
  }

  newBlog() {
    this.opennewblog();
  }

  opennewblog() {
    this.dialog.open(NewblogComponent,{width : '40%'})
  }

}
