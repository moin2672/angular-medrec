import { Injectable } from '@angular/core';
import {Sub} from './sub.model'
import { Subject } from 'rxjs';

@Injectable()
export class SubjectService {

  private subjects: Sub[]=[];
  private subjectsUpdated = new Subject<Sub[]>();
  constructor() { }

  getSubjects(){
    return this.subjects;
  }

  getSubjectUpdateListener(){
    return this.subjectsUpdated.asObservable();
  }

  addSubject(subjectAadhar: string, subjectName: string){
    const subject:Sub= {subjectAadhar: subjectAadhar, subjectName: subjectName};
    this.subjects.push(subject);
    this.subjectsUpdated.next([...this.subjects]);
  }

}