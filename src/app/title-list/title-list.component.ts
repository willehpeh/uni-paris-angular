import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.scss']
})
export class TitleListComponent implements OnInit {

  @Input() postList: Post[];
  @Input() toggled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(): void {
    this.toggled = !this.toggled;
  }

}
