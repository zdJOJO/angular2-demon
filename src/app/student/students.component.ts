import { Component, HostBinding } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Student } from './student';
import { StudentServer } from './student.server';

import { jojoComponentAnimation } from '../animations';

@Component({
  selector: "student-list",
  animations: [ jojoComponentAnimation ],
  styleUrls: ["./student.less"],
  templateUrl: "./students.component.html",
  providers: [ StudentServer ]
})

export class StudentList{

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  students$: Observable<Student[]>;
  private selectedId: number;

  studentName: string = "";

  color: string
  fontSize: number
  radioes = [
    {color: "#4cae4c", fontSize: 12 },
    {color: "#eea236", fontSize: 17 },
    {color: "#d43f3a", fontSize: 22 }
  ]

  constructor(
    private service: StudentServer,
    private route: ActivatedRoute
  ){ }

  ngOnInit() {
    this.students$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getStudents();
      });
  }

  handleAddStudent(){
    let student: Student
    let student_observable = this.service.getStudents().map( students => 
      students.find( student => student.name === this.studentName))
    
    student_observable.subscribe( x => student=x )

    if(this.studentName && !student){
      this.service.addStudent( new Student( Math.ceil(Math.random()*25), this.studentName ) );
      this.studentName = ""
    }
  }

  handleDeleteStudent(student: Student, index:number){
    this.service.removeStudent(index)
  }

  handleRemoveLast(){
    this.service.removeStudent(-1)
  }

  trackByStudentId =(index: number, student: Student)=> student.id

  handleChooseColor(radio){
    this.color = radio.color;
    this.fontSize = radio.fontSize;
  }

}