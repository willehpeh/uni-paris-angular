import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { NgModule } from '@angular/core';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'post/:index', component: SinglePostComponent },
  { path: '404', component: FourOhFourComponent },
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  { path: '**', redirectTo: '404' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
