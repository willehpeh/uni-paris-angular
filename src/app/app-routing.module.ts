import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FourOhFourComponent } from './core/components/four-oh-four/four-oh-four.component';

const routes: Routes = [
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
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
