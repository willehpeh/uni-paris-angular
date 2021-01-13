import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor() { }

  ngOnInit(): void {
    this.posts = [
      {
        title: 'Mon premier post !',
        user: 'Will',
        date: new Date(),
        content: 'Voici ce que je dis !',
        imageUrl: 'https://www.zooplus.fr/magazine/wp-content/uploads/2019/06/arrivée-dun-chaton-à-la-maison.jpeg'
      },
      {
        title: 'Mon second post !',
        user: 'Will',
        date: new Date(),
        content: 'Voici ce que je dis encore !',
        imageUrl: 'https://www.zooplus.fr/magazine/wp-content/uploads/2019/06/arrivée-dun-chaton-à-la-maison.jpeg'
      },
      {
        title: 'Mon troisième post !',
        user: 'Will',
        date: new Date(),
        content: 'Voici ce que je toujours !',
        imageUrl: 'https://www.zooplus.fr/magazine/wp-content/uploads/2019/06/arrivée-dun-chaton-à-la-maison.jpeg'
      },
    ];
  }

  onPostButtonClicked(title: string): void {
    alert(title);
  }

}
