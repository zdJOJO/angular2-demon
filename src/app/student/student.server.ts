import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { STUDENTS } from './mock-students';
import { Observable } from 'rxjs/Observable';

import { Student } from './student';

@Injectable()
export class StudentServer {

  students: Student[] = STUDENTS;

  getStudents = () => Observable.of(this.students);

  getStudent = (id: number | string) => {
    return this.getStudents()
    // (+) before `id` turns the string into a number
    .map( students => students.find( student => student.id === +id))
  }

  addStudent = (student: Student) =>{
    this.students.push(student);
  }

  removeStudent = (index: number) => {
    this.students.splice(index, 1)
  }
}