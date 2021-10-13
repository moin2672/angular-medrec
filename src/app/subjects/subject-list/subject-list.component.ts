import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css'],
})
export class SubjectListComponent implements OnInit {
  @Input() pdata = [];
  //pdata = [
  //   {
  //       "id":123,
  //       "subjectID":"MEDREC001",
  //       "subjectAadhar":"123456789012",
  //       "subjectName":"Aslam",
  //       "subjectDOB":"01-JAN-1990",
  //       "subjectGender":"Male",
  //       "subjectAddress":"#21, ABC street, DEF Block, GHI city.",
  //       "subjectPhoneNo":"9988776655",
  //       "subjectEmailID":"aslam@gmail.com",
  //       "subjectVisits":[
  //           {
  //               "sv_visitedOn":"23-JAN-2021",
  //               "sv_Height":124,
  //               "sv_Weight":233,
  //               "sv_Temp":99,
  //               "sv_Pulse":88,
  //               "sv_Oxy":98,
  //               "sv_bp_sys":140,
  //               "sv_bp_dia":70,
  //               "sv_bp_symptoms":"Fever",
  //               "sv_bp_prescription":"Dolo 650",
  //               "sv_isLabreqd":false,
  //               "sv_lab":"",
  //               "sv_isScanReqd":false,
  //               "sv_scan":"",
  //               "sv_isFollowUp":false,
  //               "sv_nextDate":"",
  //               "sv_attachment":""
  //           }
  //       ]
  //   },
  //   {
  //       "id":123,
  //       "subjectID":"MEDREC002",
  //       "subjectAadhar":"123456789012",
  //       "subjectName":"Babu",
  //       "subjectDOB":"01-JAN-1990",
  //       "subjectGender":"Male",
  //       "subjectAddress":"#21, ABC street, DEF Block, GHI city.",
  //       "subjectPhoneNo":"9988776655",
  //       "subjectEmailID":"babu@gmail.com",
  //       "subjectVisits":[
  //           {
  //               "sv_visitedOn":"24-JAN-2021",
  //               "sv_Height":124,
  //               "sv_Weight":233,
  //               "sv_Temp":99,
  //               "sv_Pulse":88,
  //               "sv_Oxy":98,
  //               "sv_bp_sys":140,
  //               "sv_bp_dia":70,
  //               "sv_bp_symptoms":"Fever",
  //               "sv_bp_prescription":"Dolo 650",
  //               "sv_isLabreqd":false,
  //               "sv_lab":"",
  //               "sv_isScanReqd":false,
  //               "sv_scan":"",
  //               "sv_isFollowUp":false,
  //               "sv_nextDate":"",
  //               "sv_attachment":""
  //           },
  //           {
  //               "sv_visitedOn":"30-JAN-2021",
  //               "sv_Height":124,
  //               "sv_Weight":233,
  //               "sv_Temp":99,
  //               "sv_Pulse":88,
  //               "sv_Oxy":98,
  //               "sv_bp_sys":140,
  //               "sv_bp_dia":70,
  //               "sv_bp_symptoms":"Fever",
  //               "sv_bp_prescription":"Dolo 650",
  //               "sv_isLabreqd":false,
  //               "sv_lab":"",
  //               "sv_isScanReqd":false,
  //               "sv_scan":"",
  //               "sv_isFollowUp":true,
  //               "sv_nextDate":"02-JAN-2021",
  //               "sv_attachment":""
  //           }
  //       ]
  //   },
  //   {
  //     "id":123,
  //     "subjectID":"MEDREC003",
  //     "subjectAadhar":"123456789012",
  //     "subjectName":"Chand",
  //     "subjectDOB":"01-JAN-1990",
  //     "subjectGender":"Male",
  //     "subjectAddress":"#21, ABC street, DEF Block, GHI city.",
  //     "subjectPhoneNo":"9988776655",
  //     "subjectEmailID":"chand@gmail.com",
  //     "subjectVisits":[
  //         {
  //             "sv_visitedOn":"24-JAN-2021",
  //             "sv_Height":124,
  //             "sv_Weight":233,
  //             "sv_Temp":99,
  //             "sv_Pulse":88,
  //             "sv_Oxy":98,
  //             "sv_bp_sys":140,
  //             "sv_bp_dia":70,
  //             "sv_bp_symptoms":"Fever",
  //             "sv_bp_prescription":"Dolo 650",
  //             "sv_isLabreqd":false,
  //             "sv_lab":"",
  //             "sv_isScanReqd":false,
  //             "sv_scan":"",
  //             "sv_isFollowUp":false,
  //             "sv_nextDate":"",
  //             "sv_attachment":""
  //         },
  //         {
  //             "sv_visitedOn":"30-JAN-2021",
  //             "sv_Height":124,
  //             "sv_Weight":233,
  //             "sv_Temp":99,
  //             "sv_Pulse":88,
  //             "sv_Oxy":98,
  //             "sv_bp_sys":140,
  //             "sv_bp_dia":70,
  //             "sv_bp_symptoms":"Fever",
  //             "sv_bp_prescription":"Dolo 650",
  //             "sv_isLabreqd":false,
  //             "sv_lab":"",
  //             "sv_isScanReqd":false,
  //             "sv_scan":"",
  //             "sv_isFollowUp":true,
  //             "sv_nextDate":"02-JAN-2021",
  //             "sv_attachment":""
  //         },
  //         {
  //             "sv_visitedOn":"07-FEB-2021",
  //             "sv_Height":124,
  //             "sv_Weight":233,
  //             "sv_Temp":99,
  //             "sv_Pulse":88,
  //             "sv_Oxy":98,
  //             "sv_bp_sys":140,
  //             "sv_bp_dia":70,
  //             "sv_bp_symptoms":"Fever",
  //             "sv_bp_prescription":"Dolo 650",
  //             "sv_isLabreqd":false,
  //             "sv_lab":"",
  //             "sv_isScanReqd":false,
  //             "sv_scan":"",
  //             "sv_isFollowUp":true,
  //             "sv_nextDate":"02-MAR-2021",
  //             "sv_attachment":""
  //         }
  //     ]
  // }
  //];
  // data=[
  //   {"id":123,"subjectID":"MEDREC 001", "isFollowUp":true},
  //   {"id":456,"subjectID":"MEDREC 002", "isFollowUp":false},
  //   {"id":789,"subjectID":"MEDREC 003", "isFollowUp":true},
  //   {"id":321,"subjectID":"MEDREC 004", "isFollowUp":false},
  //   {"id":654,"subjectID":"MEDREC 005", "isFollowUp":true},
  //   {"id":987,"subjectID":"MEDREC 006", "isFollowUp":true}
  // ]
  constructor() {}
  ngOnInit() {}
}
