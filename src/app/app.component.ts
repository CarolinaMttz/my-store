import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Caro';
  age = 18;
  img ="https://lumiere-a.akamaihd.net/v1/images/starwars_e58d682b.png";
  btnDisabled = true;

  person = {
    name:  'Carolina',
    age:    18,
    avatar: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2017/12/08/5fa3d8e24f841.jpeg'
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }

}
