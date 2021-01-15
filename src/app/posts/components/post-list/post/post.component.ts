import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../../models/post.model';
import { UserService } from '../../../../core/services/user.service';

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
  userFirstName: string;
  userImageUrl: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.buttonText = 'Click me!';
    this.userFirstName = this.userService.getFirstNameByUserId(this.postObject.userId);
    this.userImageUrl = this.userService.getImageUrlByUserId(this.postObject.userId);
  }

  onClickButton(): void {
    this.buttonText = 'Clicked!';
    this.counter++;
    this.buttonClicked.emit(this.postObject.title);
  }

}
