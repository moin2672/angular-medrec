import { Component, OnInit } from '@angular/core';
import { Sub } from '../sub.model';
import { EmailValidator, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
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
  form:FormGroup;

  constructor(private subjectService: SubjectService,public activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    this.form=new FormGroup({
      subjectAadhar:new FormControl(null, {validators:[Validators.required, Validators.minLength(3)]}),
      subjectName:new FormControl(null, {validators:[Validators.required]})
    })


    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      if(paramMap.has('subjectId')){
        this.editMode=true;
        this.subjectId=paramMap.get('subjectId');
        this.subjectService.getSubject(this.subjectId)
            .subscribe(subjectData=>{
              console.log(subjectData);
              const transformedSubjectData: Sub={
                _id:subjectData._id, 
                subjectAadhar:subjectData.subjectAadhar, 
                subjectName:subjectData.subjectName
              }
              this.subject=transformedSubjectData;
              this.form.setValue({
                subjectAadhar:this.subject.subjectAadhar, 
                subjectName:this.subject.subjectName
              })
              console.log(this.subject)
            });
      } else {
        this.editMode=false;
        this.subjectId=null;
      }
    });
  }

  onSaveSubject() {
    if (this.form.invalid) {
      return;
    }
    if(!this.editMode){
      this.subjectService.addSubject(this.form.value.subjectAadhar, this.form.value.subjectName);
    } else {
      this.subjectService.updateSubject(this.subjectId, this.form.value.subjectAadhar, this.form.value.subjectName);
    }
    this.form.reset();

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
