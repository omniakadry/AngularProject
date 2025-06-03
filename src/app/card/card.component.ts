import { Component, Input, Output, EventEmitter } from '@angular/core';
import { post } from '../models/card.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [CommonModule, FormsModule]
})
export class CardComponent {
confirmPost() {
throw new Error('Method not implemented.');
}
  @Input() post: post = {
    username: '',
    profileImage: '',
    postImage: '',
    content: '',
    time: '',
    text: undefined,
    author: undefined
  };

  liked: boolean = false;
  comments: string[] = [];
  newComment: string = '';
  showCommentInput: boolean = false;
posts: any;
i: number = 0;


isliked() {
  this.liked = !this.liked;
}


  toggleCommentInput() {
    this.showCommentInput = !this.showCommentInput;
  }

  addComment() {
    const trimmed = this.newComment.trim();
    if (trimmed) {
      this.comments.push(trimmed);
      this.newComment = '';
      this.showCommentInput = false;
    }
  }
   deleteComment(index: number) {
    this.comments.splice(index, 1);
  }
    confirmingDeleteIndex: number | null = null;

confirmDelete(index: number) {
  const confirmed = confirm("Do you really want to delete this post .. ?!");
  if (confirmed) {
    this.deletePost(index);
  }
}

deletePost(index: number) {
  this.posts.splice(index, 1);
}

}
