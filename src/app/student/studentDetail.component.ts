import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import {  Student } from './student';


/**
 * 进场：void => * | :enter
 * 离场：* => void | :leave
*/
@Component({
  selector: "student-detail",
  styleUrls: ["./student.less"],
  animations: [
    trigger("jojoFly", [
      state("in", style({transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({
          opacity: 0.05,
          transform: 'translateX(-100%)'
        }),
        animate("0.3s 20ms ease-in")
      ]),
      transition('* => void', [
        animate('0.2s 0.1s ease-out', style({
          opacity: 1,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ],
  template: `
    <li 
      class="student"
      [@jojoFly]="'in'"
    >
      <p [jojoHighlight]="color" [fontSize]="fontSize">
        你好，Master {{number + 1}}
      </p>

      我是 {{student.name}}, 今年 {{student.age}} 岁

      <span *jojoUnless="student.age===5">我是班长？？</span>

      <a href="javascript:void(0)" (click)="handleDelete(student)">X</a>
    </li>
    `
})

export class StudentDetail {
  @Input() student: Student;
  @Input("numberIndex") number: string;
  @Output() onDelete = new EventEmitter();

  @Input("helloColor") color: string; // "#4cae4c";
  @Input("helloFontSize") fontSize: number; //  20;

  handleDelete(student: Student){
    this.onDelete.emit(student);
  }
}