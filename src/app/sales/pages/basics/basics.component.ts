import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  lowerName: string = 'jorge';
  upperName: string = 'JORGE';
  fullName: string = 'jOrGe gUzMaN';
  today: Date = new Date();

}
