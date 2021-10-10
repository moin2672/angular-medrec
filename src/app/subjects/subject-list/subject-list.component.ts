import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  constructor() { }
data=[
  {"id":123,"subjectID":"MEDREC 001", "isFollowUp":true},
  {"id":456,"subjectID":"MEDREC 002", "isFollowUp":false},
  {"id":789,"subjectID":"MEDREC 003", "isFollowUp":true},
  {"id":321,"subjectID":"MEDREC 004", "isFollowUp":false},
  {"id":654,"subjectID":"MEDREC 005", "isFollowUp":true},
  {"id":987,"subjectID":"MEDREC 006", "isFollowUp":true}
]
followUp=[]
nonFollowUp=[]
  ngOnInit() {
    this.followUp= this.data.filter(function(v, i) {
      // return ((v["term_id"] == 5 || v["term_id"] == 6) && v.type == "car");
      return(v["isFollowUp"]==true)
    })
    this.nonFollowUp= this.data.filter(function(v, i) {
      // return ((v["term_id"] == 5 || v["term_id"] == 6) && v.type == "car");
      return(v["isFollowUp"]==false)
    })
  }

}