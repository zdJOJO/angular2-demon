import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { StudentList } from './student/students.component';
import { StudentDetail } from './student//studentDetail.component';
import { StudentServer } from './student/student.server';
import { Comment } from './comment/comment.coponent';
import { PageNotFoundComponent } from './404/404.coponent';

import { HighlightDirective } from '../attribute-directives/highlight.directive';
import { UnlessDirective } from '../structural-directives/unless.directive';



const appRoutes: Routes = [
  { path: 'students', component: StudentList },
  { path: 'comments', component: Comment },
  { path: '', redirectTo: '/students', pathMatch: 'full' },  // 默认路由设置
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  declarations: [
    AppComponent,

    StudentList,
    StudentDetail,
    Comment,
    PageNotFoundComponent,

    HighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [ StudentServer ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
