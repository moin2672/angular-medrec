import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubjectListComponent } from './subjects/subject-list/subject-list.component';
import { SubjectCreateComponent } from './subjects/subject-create/subject-create.component';
import { SubjectService } from './subjects/subject.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderComponent, SubjectListComponent, SubjectCreateComponent ],
  providers: [SubjectService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
