import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Comment } from './comment/comment.coponent';
import { PageNotFoundComponent } from './404/404.coponent';

import { AppRoutingModule } from './app-routing.module';
import { StudentModule } from './student/student.module';


/**
 * 
 * 
 * @description:导入模块的顺序  AppRoutingModule最后一个
 * */ 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    StudentModule,
    AppRoutingModule // 路由模块
  ],
  declarations: [
    AppComponent,

    Comment,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
