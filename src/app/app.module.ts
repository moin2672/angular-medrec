import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubjectListComponent } from './subjects/subject-list/subject-list.component';
import { SubjectCreateComponent } from './subjects/subject-create/subject-create.component';
import { SubjectService } from './subjects/subject.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule,ReactiveFormsModule,AppRoutingModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    SubjectListComponent,
    SubjectCreateComponent,
  ],
  providers: [SubjectService],
  bootstrap: [AppComponent],
})
export class AppModule {}
