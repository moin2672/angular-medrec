import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Sub} from '../sub.model';
import { NgForm } from '@angular/forms';

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

  onAddSubject(subjectForm: NgForm){
    if(subjectForm.invalid){
      return;
    }
    const subject: Sub={subjectAadhar:subjectForm.value.subjectAadhar, subjectName:subjectForm.value.subjectName}
    this.subjectCreated.emit(subject);
    console.log(subject);
  }
}
