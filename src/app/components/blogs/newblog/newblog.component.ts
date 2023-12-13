import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BlogType, editnewbloginputtype, BlogInput } from '../../../shared/store/blogs/blog.state';
import { addblog, deleteBlog, updateBlog } from '../../../shared/store/blogs/blog.action';
import { selectBlogbyId, selectBlogs } from '../../../shared/store/blogs/blog.selector';
import { filter, find, map, pipe } from 'rxjs';

@Component({
  selector: 'app-newblog',
  templateUrl: './newblog.component.html',
  styleUrls: ['./newblog.component.css']
})
export class NewblogComponent {

  NewBlogForm !: FormGroup;
  actiontype$ : string = 'add';
  

  constructor(private builder : FormBuilder, 
              private newformdialog : MatDialogRef<NewblogComponent>,
              private store : Store<{Blogs : {BlogList : BlogType[]}}>,
              @Inject(MAT_DIALOG_DATA)  public data : editnewbloginputtype
              ) {
    this.actiontype$ = data.actiontype;
    if(data.actiontype != 'add') {
     this.store.select(selectBlogbyId(data.id)).subscribe(
        res => {
          this.NewBlogForm = builder.group({
            id : builder.control(res?.id),
            title : builder.control(res?.title,Validators.required),
            description : builder.control(res?.description,Validators.required),
                    });
        })
      }
     else {
      this.NewBlogForm = builder.group({
        id : builder.control(0),
        title : builder.control('',Validators.required),
        description : builder.control('',Validators.required),
                });
     }           
    }

    AddEditDeleteBlog() {
    if (this.NewBlogForm.valid) {
      if (this.actiontype$ === 'edit')
      {
        this.store.dispatch(updateBlog({blog : this.NewBlogForm.value}));
      }
      else if (this.actiontype$ === 'delete')
      {
        this.store.dispatch(deleteBlog({blogid : this.NewBlogForm.value.id}));
      }
      else {
        const bloginput : BlogInput = this.NewBlogForm.value;
        this.store.dispatch(addblog({blog : { title : bloginput.title, description: bloginput.description}}));
      }
      this.newformdialog.close();
    }
  }

  closeNewBlogDialog() {
    this.newformdialog.close();
  }



}
