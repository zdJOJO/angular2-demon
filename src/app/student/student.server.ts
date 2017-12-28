import { Injectable } from '@angular/core';
import { STUDENTS } from './mock-students';

@Injectable()
export class StudentServer {
  getStudent = () => STUDENTS
}