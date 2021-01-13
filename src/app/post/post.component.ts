import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postObject: Post;
  @Input() counter: number;
  @Output() buttonClicked = new EventEmitter<string>();
  buttonText: string;

  constructor() { }

  ngOnInit(): void {
    this.buttonText = 'Click me!';
  }

  onClickButton(): void {
    this.buttonText = 'Clicked!';
    this.counter++;
    this.buttonClicked.emit(this.postObject.title);
  }

}
