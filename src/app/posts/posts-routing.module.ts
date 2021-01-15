import { RouterModule, Routes } from '@angular/router';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: ':id', component: SinglePostComponent },
  { path: '', pathMatch: 'full', component: PostListComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostsRoutingModule {}
