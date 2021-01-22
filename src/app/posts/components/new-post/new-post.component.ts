import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  newPostForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postsService: PostsService,
              private router: Router) { }

  ngOnInit(): void {
    this.newPostForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(8)]],
      content: ['', Validators.required]
    });
  }

  onSavePost(): void {
    this.postsService.createNewPost(this.newPostForm.value).pipe(
      tap(post => {
        console.table(post);
        this.router.navigateByUrl('/posts');
      })
    ).subscribe();
  }

}
