import { Component } from '@angular/core';
import {Sub} from './subjects/sub.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  storedSubjects:Sub[]=[];
  onSubejctsAdded(subject:Sub){
    this.storedSubjects.push(subject);
  }
}
