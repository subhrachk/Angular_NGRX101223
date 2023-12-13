import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterdisplayComponent } from './components/counter/counterdisplay/counterdisplay.component';
import { CounterbuttonComponent } from './components/counter/counterbutton/counterbutton.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/counter/counter.reducer';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogdetailsComponent } from './components/blogs/blogdetails/blogdetails.component';
import { NewblogComponent } from './components/blogs/newblog/newblog.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MaterialModule } from './material.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomCounterComponent } from './components/counter/customcounter/customcounter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { blogReducer } from './shared/store/blogs/blog.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BlogEffects } from './shared/store/blogs/blog.effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterdisplayComponent,
    CounterbuttonComponent,
    HomeComponent,
    MenuComponent,
    BlogsComponent,
    BlogdetailsComponent,
    NewblogComponent,
    NotfoundComponent,
    CustomCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot({Counter : counterReducer , Blogs : blogReducer}),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot(BlogEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
