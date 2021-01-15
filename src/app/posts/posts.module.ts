import { NgModule } from '@angular/core';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post-list/post/post.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { TitleListComponent } from './components/post-list/title-list/title-list.component';
import { SharedModule } from '../shared/shared.module';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [
    PostListComponent,
    PostComponent,
    SinglePostComponent,
    TitleListComponent
  ],
  imports: [
    SharedModule,
    PostsRoutingModule
  ],
  exports: [
    PostListComponent,
    PostComponent,
    SinglePostComponent,
    TitleListComponent
  ],
  providers: [
    PostsService
  ]
})
export class PostsModule {}

