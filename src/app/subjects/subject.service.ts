import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sub } from './sub.model';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class SubjectService {
  private subjects: Sub[] = [];
  private subjectsUpdated = new Subject<{subjects:Sub[],subjectCount:number}>();

  constructor(private httpClient: HttpClient, private router: Router) {}

  getSubjects(postsPerPage:number, currentPage: number) {
    const queryParams=`?pagesize=${postsPerPage}&currentpage=${currentPage}`;
    console.log(queryParams)
    this.httpClient
      .get<{ message: string; subjects: Sub[], maxSubjects:number }>(
        'http://localhost:3003/api/subjects'+queryParams
      )
      .pipe(
        map((subjectData) => {
          return { 
            subjects: subjectData.subjects.map(subject => {
              return {
                subjectAadhar:subject.subjectAadhar,
                subjectName:subject.subjectName,
                _id:subject._id
              };
            }),
            maxSubjects:subjectData.maxSubjects
          };
        })
      )
      .subscribe(transformedSubjectData=>{
        this.subjects=transformedSubjectData.subjects;
        console.log({
          subjects:[...this.subjects],
          subjectCount: transformedSubjectData.maxSubjects
        })
        this.subjectsUpdated.next({
                                subjects:[...this.subjects],
                                subjectCount: transformedSubjectData.maxSubjects
                              });
      })
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
      .post<{ message: string; subject: Sub }>(
        'http://localhost:3003/api/subjects',
        subject
      )
      .subscribe((responseData) => {
        // console.log(responseData);
        // const subject : Sub ={
        //   _id:responseData.subject._id, 
        //   subjectAadhar:subjectAadhar, 
        //   subjectName:subjectName
        // }
        // this.subjects.push(subject);
        // this.subjectsUpdated.next([...this.subjects]);
        this.router.navigate(['/']);
      });
  }

  getSubject(subjecttId: string) {
    // console.log(id)
    // console.log(this.posts.find(p=>p.id===id))
    return this.httpClient.get<{
      _id: string;
      subjectAadhar: string;
      subjectName: string;
    }>('http://localhost:3003/api/subjects/' + subjecttId);
  }

  updateSubject(_id: string, subjectAadhar: string, subjectName: string) {
    const subject: Sub = {
      _id: _id,
      subjectAadhar: subjectAadhar,
      subjectName: subjectName,
    };
    this.httpClient
      .put('http://localhost:3003/api/subjects/' + _id, subject)
      .subscribe((response) => {
        // console.log(response)
        // const updatedSubjects = [...this.subjects];
        // const oldPostIndex = updatedSubjects.findIndex(
        //   (p) => p._id === subject._id
        // );
        // updatedSubjects[oldPostIndex] = subject;
        // this.subjects = updatedSubjects;
        // this.subjectsUpdated.next([...this.subjects]);
        this.router.navigate(['/']);
      });
  }

  deleteSubject(subjecttId: string) {
    return this.httpClient
      .delete('http://localhost:3003/api/subjects/' + subjecttId)
      // .subscribe(() => {
      //   const updatedSubjects = this.subjects.filter(
      //     (subject) => subject._id != subjecttId
      //   );
      //   this.subjects = updatedSubjects;
      //   this.subjectsUpdated.next([...this.subjects]);
      //   console.log('Deleted!');
      // });
  }
}
