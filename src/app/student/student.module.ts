import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { StudentList }    from './students.component';
import { StudentItem } from './studentItem.component';
import { StudentDetail } from './studentDetail.component';

import { StudentServer } from './student.server';

import { StudentRoutingModule } from './studen.routing.moudle';

import { HighlightDirective } from '../../attribute-directives/highlight.directive';
import { UnlessDirective } from '../../structural-directives/unless.directive';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,

    StudentRoutingModule // 学生 路由模块 
  ],

  declarations: [
    StudentList,
    StudentItem,
    StudentDetail,

    HighlightDirective,
    UnlessDirective
  ],

  providers: [ 
    StudentServer
  ]
})

export class StudentModule { }