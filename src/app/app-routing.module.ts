/**
 * @description app 路由模块
 */  

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './404/404.component';

const appRoutes: Routes = [
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