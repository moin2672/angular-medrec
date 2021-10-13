import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectCreateComponent } from './subjects/subject-create/subject-create.component';
import { SubjectListComponent } from './subjects/subject-list/subject-list.component';

const routes: Routes = [
  { path: '', component: SubjectListComponent },
  { path: 'create', component: SubjectCreateComponent },
  { path: 'edit/:subjectId', component: SubjectCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
