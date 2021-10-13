import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sub } from './sub.model';
import { Subject } from 'rxjs';

@Injectable()
export class SubjectService {
  private subjects: Sub[] = [];
  private subjectsUpdated = new Subject<Sub[]>();

  constructor(private httpClient: HttpClient) {}

  getSubjects() {
    this.httpClient
      .get<{ message: string; subjects: Sub[] }>(
        'http://localhost:3003/api/subjects'
      )
      .subscribe((postData) => {
        this.subjects = postData.subjects;
        this.subjectsUpdated.next([...this.subjects]);
      });
  }

  getSubjectUpdateListener() {
    return this.subjectsUpdated.asObservable();
  }

  addSubject(subjectAadhar: string, subjectName: string) {
    const subject: Sub = {
      id: null,
      subjectAadhar: subjectAadhar,
      subjectName: subjectName,
    };
    this.httpClient
      .post<{ message: string }>('http://localhost:3003/api/subjects', subject)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.subjects.push(subject);
        this.subjectsUpdated.next([...this.subjects]);
      });
  }
}
