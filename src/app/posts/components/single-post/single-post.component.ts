import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../../core/models/user.model';
import { shareReplay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post$: Observable<Post>;
  user$: Observable<User>;

  constructor(private postsService: PostsService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.post$ = this.postsService.getPostById(id).pipe(
      shareReplay(1)
    );
    this.user$ = this.post$.pipe(
      switchMap(post => this.userService.getUserByUserId(post.userId)),
    );

    // if (postObj) {
    //   this.post = postObj;
    //   const user = this.userService.getUserByUserId(this.post.userId);
    //   this.userFirstName = user.firstName;
    //   this.userImageUrl = user.image;
    // } else {
    //   this.router.navigateByUrl('/404');
    // }
  }

  onClickBack(): void {
    this.router.navigateByUrl('/posts');
  }

}
