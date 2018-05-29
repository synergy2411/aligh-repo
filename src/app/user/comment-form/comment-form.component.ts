import { Component, OnInit, Input } from '@angular/core';
import  { Comment } from '../../model/comment';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  @Input("comments") comments : Comment[];
  
  constructor() { }

  ngOnInit() {
  }

}
