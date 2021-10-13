import { Injectable } from '@angular/core';
import {Sub} from './sub.model'

@Injectable()
export class SubjectService {

  private subjects: Sub[]=[];

  constructor() { }

  getSubjects(){
    return this.subjects;
  }

  addSubject(subjectAadhar: string, subjectName: string){
    const subject:Sub= {subjectAadhar: subjectAadhar, subjectName: subjectName};
    this.subjects.push(subject);
  }

}