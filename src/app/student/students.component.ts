import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from './student';
import { StudentServer } from './student.server';

@Component({
  selector: "student-list",
  styleUrls: ["./student.less"],
  templateUrl: "./students.component.html",
  providers: [ StudentServer ]
})

export class StudentList{

  students: Student[] = [];
  studentName: string = "";

  color: string
  fontSize: number
  radioes = [
    {color: "#4cae4c", fontSize: 12 },
    {color: "#eea236", fontSize: 17 },
    {color: "#d43f3a", fontSize: 22 }
  ]

  constructor(studentServer: StudentServer){
    this.students = studentServer.getStudent();
  }

  handleAddStudent(){
    let names = this.students.map(student => student.name);
    if(this.studentName && names.indexOf(this.studentName) < 0){
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

  handleRemoveLast(){
    if(this.students.length > 0)
      this.students.length -= 1;
  }

  handleChooseColor(radio){
    this.color = radio.color;
    this.fontSize = radio.fontSize;
  }

}