/**
 * @description student 路由模块
 */  

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentList } from './students.component';
import { StudentDetail } from './studentDetail.component';

const studentRoute: Routes = [
  { path: "students", component: StudentList },
  { path: "student/:id", component: StudentDetail }
];

@NgModule({
  imports: [
    RouterModule.forRoot(studentRoute)
  ],
  exports: [
    RouterModule
  ]
})

export class StudentRoutingModule {}