import { Component, OnInit, Input } from '@angular/core';
import  { Comment } from '../../model/comment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  tab : number = 1;
  @Input("comments") comments : Comment[];

  addComment(f : NgForm){
    console.log(f);
    const comment = {
      stars : f.value.stars,
      body : f.value.body,
      author : f.value.author
    }
    this.comments.push(comment);
  }
  constructor() { }

  ngOnInit() {
  }

}
