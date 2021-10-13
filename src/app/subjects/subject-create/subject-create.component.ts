import { Component, OnInit } from '@angular/core';
import { Sub } from '../sub.model';
import { NgForm } from '@angular/forms';
import { SubjectService } from '../subject.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.css'],
})
export class SubjectCreateComponent implements OnInit {
  subject:Sub
  subjectAadhar = '';
  subjectName = '';

  editMode = false;
  private subjectId:string;

  constructor(private subjectService: SubjectService,public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      if(paramMap.has('subjectId')){
        this.editMode=true;
        this.subjectId=paramMap.get('subjectId');
        this.subjectService.getSubject(this.subjectId)
            .subscribe(subjectData=>{
              console.log(subjectData);
              const transformedSubjectData: Sub={_id:subjectData._id,             subjectAadhar:subjectData.subjectAadhar, subjectName:subjectData.subjectName}
              this.subject=transformedSubjectData;
              console.log(this.subject)
            });
      } else {
        this.editMode=false;
        this.subjectId=null;
      }
    });
  }

  onSaveSubject(subjectForm: NgForm) {
    if (subjectForm.invalid) {
      return;
    }
    if(!this.editMode){
      this.subjectService.addSubject(subjectForm.value.subjectAadhar, subjectForm.value.subjectName);
    } else {
      this.subjectService.updateSubject(this.subjectId, subjectForm.value.subjectAadhar, subjectForm.value.subjectName);
    }
    subjectForm.resetForm();

    // const subject: Sub = {
    //   _id: null,
    //   subjectAadhar: subjectForm.value.subjectAadhar,
    //   subjectName: subjectForm.value.subjectName,
    // };
    // this.subjectService.addSubject(
    //   subjectForm.value.subjectAadhar,
    //   subjectForm.value.subjectName
    // );
    // console.log(subject);
  }
}
