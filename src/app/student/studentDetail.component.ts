import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Component, OnInit, EventEmitter, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Student } from './student';
import { StudentServer } from './student.server';

import { jojoComponentAnimation } from '../animations';

@Component({
  animations: [ jojoComponentAnimation ],
  template: `
  <div *ngIf="student$ | async as student">
    <h4>这里是学生详情:</h4>
    我是: {{ student.name }}
    <p>
      可是这时他们发现,白纸黑字填写的志愿,已经使他们几乎失去了重新选择的可能性。糊里糊涂进错了门的学生,
      还有的是缺少信息,缺少指导。招生学校提供的信息和介绍大都简短而空泛,要么是笼而统之、充满溢美之词的介绍资
      料,要么是简单的、没有专业介绍、只有招生人数的招生计划。不了解详情的学生,就只能将自己的命运像掷骰子 ..
    </p>
    <button  (click)="gotoStudents(student)">返回学生列表</button>
  </div>
  `
})

export class StudentDetail implements OnInit{

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  student$: Observable<Student>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StudentServer
  ){}

  ngOnInit() {
    this.student$ = this.route.paramMap
      .switchMap( (params: ParamMap) => {
        return this.service.getStudent(params.get("id"))
      }
      );
    
  }

  gotoStudents(student: Student){
    let studentId = student ? student.id : null; 

    /**
     * @description Matrix URL(矩阵URL标记法): localhost:3000/heroes;id=15
     * */ 
    this.router.navigate(["/students", {id: studentId}])
  }
}