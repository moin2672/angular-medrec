import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sub } from './sub.model';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SubjectService {
  private subjects: Sub[] = [];
  private subjectsUpdated = new Subject<Sub[]>();

  constructor(private httpClient: HttpClient) {}

  getSubjects() {
    this.httpClient
      .get<{ message: string; subjects: Sub[] }>(
        'http://localhost:3003/api/subjects'
      ).pipe(
        map((subjectData) => {
          return subjectData.subjects.map((subject) => {
            return {
              subjectAadhar: subject.subjectAadhar,
              subjectName: subject.subjectName,
              _id: subject._id, //_id
            };
          });
        })
      )
      .subscribe((transformedSubjects) => {
        this.subjects = transformedSubjects;
        this.subjectsUpdated.next([...this.subjects]);
      });
  }

  getSubjectUpdateListener() {
    return this.subjectsUpdated.asObservable();
  }

  addSubject(subjectAadhar: string, subjectName: string) {
    const subject: Sub = {
      _id: null,
      subjectAadhar: subjectAadhar,
      subjectName: subjectName,
    };
    this.httpClient
      .post<{ message: string; subjects: Sub[] }>(
        'http://localhost:3003/api/subjects',
        subject
      ).subscribe((responseData)=>{
        console.log(responseData.message);
        this.subjects.push(subject);
        this.subjectsUpdated.next([...this.subjects]);
      })
  }
  deleteSubject(subjecttId:string){
    this.httpClient.delete("http://localhost:3003/api/subjects/"+subjecttId)
        .subscribe(()=>{
          console.log("Deleted!");
        });
  }
}
