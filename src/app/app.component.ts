import { Component } from '@angular/core';
import { Student } from './student/student';
import { StudentServer } from './student/student.server';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentServer]
})


export class AppComponent {

  title: string = "app";
  studentName: string = "";
  students: Array<Student>

  constructor(studentServer: StudentServer){
    this.students = studentServer.getStudent();
  }

  color: string
  fontSize: number
  radioes = [
    {color: "#4cae4c", fontSize: 12 },
    {color: "#eea236", fontSize: 17 },
    {color: "#d43f3a", fontSize: 22 }
  ]

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

  handleChooseColor(radio){
    this.color = radio.color;
    this.fontSize = radio.fontSize;
  }

  handleRemoveLast(){
    if(this.students.length > 0)
      this.students.length -= 1;
  }

}
