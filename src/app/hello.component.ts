import { Component } from "@angular/core";
@Component({
  selector: 'app-hello',
  // INTERPOLATION
  template: `<h2>Hello {{user.name}}!</h2>
  <!-- PROPERTY BINDING -->
  <input type="text" [value]="user.age" />
  <!-- EVENT BINDING -->
  <button (click)="showInfo()">Show Name</button>
  `,
})
export class HelloComponent{
  user = {
    name: 'Cao Nhat Long',
    age: 13
  }

  showInfo(){
    alert(this.user.name);
  }
}
