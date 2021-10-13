import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.css'],
})
export class SubjectCreateComponent implements OnInit {
  subjectAadhar = '';
  subjectName = '';
  @Output() subjectCreated =  new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onAddSubject(){
    const subject={subjectAadhar:this.subjectAadhar, subjectName:this.subjectName}
    this.subjectCreated.emit(subject);
    console.log(subject);
  }
}
