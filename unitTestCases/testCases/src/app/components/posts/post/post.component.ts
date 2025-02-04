import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() posts : Post | null = null;
  @Output() delete = new EventEmitter();
  constructor(){};

  onDeletePost(post:Post) {
    this.delete.emit(post);
  }
}
