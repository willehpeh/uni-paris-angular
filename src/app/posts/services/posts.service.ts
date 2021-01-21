import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

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

  getPostByIndex(index: number): Post {
    return this.posts[index] || null;
  }

  deletePost(index: number): void {
    this.posts.splice(index, 1);
  }
}
