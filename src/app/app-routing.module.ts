/**
 * @description app 路由模块
 */  

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Comment } from './comment/comment.coponent';
import { PageNotFoundComponent } from './404/404.coponent';

const appRoutes: Routes = [
  { path: 'comments', component: Comment },
  { path: '', redirectTo: '/students', pathMatch: 'full' },  // 默认路由设置
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule {}