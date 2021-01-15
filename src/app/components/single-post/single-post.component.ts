import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post: Post;
  userFirstName: string;
  userImageUrl: string;

  constructor(private postsService: PostsService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    const postObj = this.postsService.getPostById(id);
    if (postObj) {
      this.post = postObj;
      const user = this.userService.getUserByUserId(this.post.userId);
      this.userFirstName = user.firstName;
      this.userImageUrl = user.image;
    } else {
      this.router.navigateByUrl('/404');
    }
  }

  onClickBack(): void {
    this.router.navigateByUrl('/posts');
  }

}
