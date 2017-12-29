/**
 * @description comment 路由模块
 */ 

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Comment } from './comment.component';
import { CommentList } from './comment-list.component';
import { CommentDetail } from './comment-detail.component';

const routes: Routes = [
  { 
    path: "comments",
    component: Comment,
    children: [
      {
        path: '',
        component: CommentList,
        children: [
          {
            path: ':id',
            component: CommentDetail,
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class CommentRoutingModule {}