import { Component,  OnInit } from '@angular/core';
import {Sub} from '../sub.model';
import { NgForm } from '@angular/forms';
import { SubjectService } from '../subject.service';
@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.css'],
})
export class SubjectCreateComponent implements OnInit {
  subjectAadhar = '';
  subjectName = '';

  constructor(private subjectService: SubjectService) {}

  ngOnInit() {}

  onAddSubject(subjectForm: NgForm){
    if(subjectForm.invalid){
      return;
    }
    const subject: Sub={subjectAadhar:subjectForm.value.subjectAadhar, subjectName:subjectForm.value.subjectName}
this.subjectService.addSubject(subjectForm.value.subjectAadhar, subjectForm.value.subjectName)
    console.log(subject);
  }
}
