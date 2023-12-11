import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BlogType } from '../../../shared/store/blogs/blog.state';
import { addBlog } from '../../../shared/store/blogs/blog.action';

@Component({
  selector: 'app-newblog',
  templateUrl: './newblog.component.html',
  styleUrls: ['./newblog.component.css']
})
export class NewblogComponent {

  NewBlogForm !: FormGroup;

  constructor(private builder : FormBuilder, 
              private newformdialog : MatDialogRef<NewblogComponent>,
              private store : Store<{Blogs : {BlogList : BlogType[]}}>) {
    this.NewBlogForm = builder.group({
      title : builder.control('',Validators.required),
      description : builder.control('',Validators.required),
              })
  }

  AddNewBlog() {
    if (this.NewBlogForm.valid) {
      this.store.dispatch(addBlog({blog : this.NewBlogForm.value}));
      this.newformdialog.close();
      //console.log(this.NewBlogForm.value);
    }
  }

  closeNewBlogDialog() {
    this.newformdialog.close();
  }



}
