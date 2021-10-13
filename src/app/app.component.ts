import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  storedSubjects=[];
  onSubejctsAdded(subject){
    this.storedSubjects.push(subject);
  }
}
