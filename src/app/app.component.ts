import { Component } from '@angular/core';
import { Student } from './student/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title: string
  studentName: string
  students: Array<Student>

  constructor(){
    this.title = "app app app";
    this.studentName = "";
    this.students = [
      new Student(12, '建国'),
      new Student(5, '建华'),
      new Student(10, '小刚'),
      new Student(20, '大明')
    ];
  }

  handleAddStudent(){
    let names = this.students.map(student => student.name);
    if(names.indexOf(this.studentName) < 0){
      this.students.push({
        name: this.studentName,
        age: Math.ceil(Math.random()*25),
        id: ""
      });
      this.studentName = ""
    }
  }

  handleDeleteStudent(student: Student){
    let index = this.students.map(ele=>ele.name).indexOf(student.name);
    this.students.splice(index, 1);
  }

  trackByStudentId =(index: number, student: Student)=> student.id
}
