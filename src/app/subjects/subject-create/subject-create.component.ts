import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Sub} from '../sub.model';
@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.css'],
})
export class SubjectCreateComponent implements OnInit {
  subjectAadhar = '';
  subjectName = '';
  @Output() subjectCreated =  new EventEmitter<Sub>();
  constructor() {}

  ngOnInit() {}

  onAddSubject(){
    const subject: Sub={subjectAadhar:this.subjectAadhar, subjectName:this.subjectName}
    this.subjectCreated.emit(subject);
    console.log(subject);
  }
}
