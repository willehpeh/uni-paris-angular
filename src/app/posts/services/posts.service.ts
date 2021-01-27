import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { EMPTY, Observable } from 'rxjs';
import * as uuid from 'uuid';
import { UserService } from '../../core/services/user.service';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient,
              private userService: UserService) {
  }

  getAllPosts(searchText?: string): Observable<Post[]> {
    const url = searchText ?
      `${environment.apiUrl}/posts?q=${searchText}` :
      `${environment.apiUrl}/posts`;
    return this.http.get<Post[]>(url);
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${environment.apiUrl}/posts/${id}`);
  }

  createNewPost(formValue: { title: string, content: string }): Observable<Post> {
    return this.userService.getCurrentUser().pipe(
      map(user => {
        const post = new Post();
        post.id = uuid.v4();
        post.title = formValue.title;
        post.content = formValue.content;
        post.comments = [];
        post.created = new Date().toString();
        post.userId = user.id;
        return post;
      }),
      switchMap(post => this.http.post<Post>(`${environment.apiUrl}/posts`, post)),
      catchError(error => {
        alert(error);
        return EMPTY;
      })
    );
  }

  deletePost(id: string): Observable<{}> {
    return this.http.delete(`${environment.apiUrl}/posts/${id}`);
  }

  // getPostByIndex(index: number): Post {
  //   return this.posts[index] || null;
  // }

  // deletePost(index: number): void {
  //   this.posts.splice(index, 1);
  // }
}
