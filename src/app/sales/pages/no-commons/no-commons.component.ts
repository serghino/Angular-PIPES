import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent {

  public name = 'Sergio';
  public genre = 'male';

  public inviteMap = {
    'male': 'invite you',
    'female': 'invite her'
  }

  // i18n Plural
  public clients: string[] = ['Maria', 'Pedro', 'Juan', 'Sergio', 'Luis'];
  public clientsMap = {
    '=0': 'no clients waiting.',
    '=1': 'we have one client waiting.',
    'other': 'we have # clients.'
  }

  public changePerson() {
    if (this.name === 'Sergio') {
      this.name = 'Maria';
      this.genre = 'female';
    } else {
      this.name = 'Sergio';
      this.genre = 'male'
    }

  }

  public removeClient() {
    this.clients.pop();
  }

  // key value pipe
  public person = {
    name: 'Sergio',
    age: 36,
    address: '11 street, New York, USA' 
  }

  public heroes = [
    {
      name: 'Superman',
      fly: true
    },
    { 
      name: 'Robin',
      fly: false
    }, 
    {
      name: 'Aquaman',
      fly: false
    }
  ]

  // Async pipe
  public myObservable = interval(2000); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...

  public valuePromise = new Promise((resolve, reject) => {  
    setTimeout(() => {
      resolve('Data from promise');
    }, 3500);
  });

}
