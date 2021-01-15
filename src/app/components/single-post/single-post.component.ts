import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post: Post;

  constructor(private postsService: PostsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const index = this.route.snapshot.params.index;
    const postObj = this.postsService.getPostByIndex(index);
    if (postObj) {
      this.post = postObj;
    } else {
      this.router.navigateByUrl('/404');
    }
  }

  onClickBack(): void {
    this.router.navigateByUrl('/posts');
  }

}
