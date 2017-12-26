import { Component, EventEmitter, Input, Output } from '@angular/core';

import {  Student } from './student';

@Component({
  selector: "student-detail",
  template: `
    <li class="student">
      <p>你好，Master {{number + 1}}</p>

      我是 {{student.name}}, 今年 {{student.age}} 岁

      <a href="javascript:void(0)" (click)="handleDelete(student)">X</a>
    </li>
    `,
  styleUrls: ["./student.less"]
})

export class StudentDetail {
  @Input() student: Student;
  @Input("numberIndex") number: string;
  @Output() onDelete = new EventEmitter();

  handleDelete(student: Student){
    this.onDelete.emit(student);
  }
}