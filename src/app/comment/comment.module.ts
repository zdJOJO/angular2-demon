import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { CommentRoutingModule } from './comment.routing';
import { CommentService } from './comment.server';
import { Comment } from './comment.component';
import { CommentList } from './comment-list.component';
import { CommentDetail } from './comment-detail.component';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,

    CommentRoutingModule // 评论 路由模块 
  ],

  declarations: [
    Comment,
    CommentList,
    CommentDetail
  ],

  providers: [ 
    CommentService
  ]
})

export class CommentModule {}