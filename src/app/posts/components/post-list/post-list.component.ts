import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts$: Observable<Post[]>;
  totalPosts$: Observable<number>;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAllPosts().pipe(
      shareReplay(1)
    );
    this.totalPosts$ = this.posts$.pipe(
      map(posts => posts.length)
    );
  }

  onPostButtonClicked(title: string): void {
    alert(title);
  }

  onDeleteFirstPost(): void {
    this.postsService.deletePost(0);
    this.posts = this.postsService.getAllPosts();
  }

}
