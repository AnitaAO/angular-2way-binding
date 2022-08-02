import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" >
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = " Two Binding ";

  email = "me@me.com";

  onKeyUp(){

    console.log(this.email);
  }
}
