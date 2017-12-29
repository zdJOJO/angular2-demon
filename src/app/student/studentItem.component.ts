import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Student } from './student';


/**
 * 进场：void => * | :enter
 * 离场：* => void | :leave
*/
@Component({
  selector: "student-item",
  styleUrls: ["./student.less"],
  animations: [
    trigger("jojoFly", [
      state("active", style({transform: 'translateX(0)', opacity: 1})),
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
      [class.selected] = "student.id === selectedId"
      [@jojoFly]="active"
    >
      <a [routerLink]="['/student', student.id]">
        <p [jojoHighlight]="color" [fontSize]="fontSize">
          你好，Master {{number + 1}}
        </p>

        我是 {{student.name}}, 今年 {{student.age}} 岁

        <span *jojoUnless="student.age===5">我是班长？？</span>
      </a>
      <span class="close" (click)="handleDelete(student)">X</span>
    </li>
    `
})

export class StudentItem {

  active: boolean = true;

  @Input() student: Student;
  @Input("numberIndex") number: string;
  @Input() selectedId: number;
  @Output() onDelete = new EventEmitter();

  @Input() color: string; // "#4cae4c";
  @Input() fontSize: number; //  20;

  handleDelete(student: Student){
    this.onDelete.emit(student);
  }
}