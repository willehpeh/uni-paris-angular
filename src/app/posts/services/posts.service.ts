import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) {
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${environment.apiUrl}/posts/${id}`);
  }

  createNewPost(formValue: { title: string, content: string }): Observable<Post> {
    const post = new Post();
    post.id = uuid.v4();
    post.title = formValue.title;
    post.content = formValue.content;
    post.comments = [];
    post.created = new Date().toString();
    post.userId = '1a14ab38-3d74-4a66-815b-b69cb1a4e958';

    return this.http.post<Post>(`${environment.apiUrl}/posts`, post);
  }

  // getPostByIndex(index: number): Post {
  //   return this.posts[index] || null;
  // }

  // deletePost(index: number): void {
  //   this.posts.splice(index, 1);
  // }
}
