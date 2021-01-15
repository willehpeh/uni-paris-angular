import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { PostComponent } from './components/post-list/post/post.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PostListComponent } from './components/post-list/post-list.component';
import { TitleListComponent } from './components/post-list/title-list/title-list.component';
import { AppRoutingModule } from './app-routing.module';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    TitleListComponent,
    SinglePostComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
