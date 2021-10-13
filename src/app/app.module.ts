import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubjectListComponent } from './subjects/subject-list/subject-list.component';
import { SubjectCreateComponent } from './subjects/subject-create/subject-create.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderComponent, SubjectListComponent, SubjectCreateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
