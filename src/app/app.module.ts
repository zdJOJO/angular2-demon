import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './404/404.component';
import { Alert } from './alert/alert.component';

import { AppRoutingModule } from './app-routing.module';
import { StudentModule } from './student/student.module';
import { CommentModule } from './comment/comment.module';


/**
 * @description:导入模块的顺序  AppRoutingModule最后一个
 * */ 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    StudentModule,
    CommentModule,
    AppRoutingModule // 路由模块
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    Alert
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
