import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';
import { delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  newPostForm: FormGroup;
  loading: boolean;

  constructor(private formBuilder: FormBuilder,
              private postsService: PostsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loading = false;
    this.newPostForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(8)]],
      content: ['', Validators.required]
    });
  }

  getTitleError(): string {
    return this.newPostForm.get('title').hasError('minlength') ?
      'Le titre doit faire au moins 8 caractères.' : '';
  }

  onSavePost(): void {
    this.loading = true;
    this.postsService.createNewPost(this.newPostForm.value).pipe(
      delay(1000),
      tap(post => {
        console.table(post);
        this.loading = false;
        this.router.navigateByUrl('/posts');
      })
    ).subscribe();
  }

}
