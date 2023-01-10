import { Component } from '@angular/core';
import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Caro';
  age = 18;
  img ="https://lumiere-a.akamaihd.net/v1/images/starwars_e58d682b.png";
  btnDisabled = true;

  person = {
    name:  'Carolina',
    age:    18,
    avatar: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2017/12/08/5fa3d8e24f841.jpeg'
  }

  names: string[] = ['Frank', 'Heydi', 'Benito'];

  newName = '';

  newUtil = '';

  box = {
    width: 100,
    height: 100,
    background: 'red'
  };

  utilesEscolares: string[] = [
      'Dos cuadernos de cuadrícula grande de 100 hojas',
      'Un cuaderno de rayas de 100 hojas',
      'Un lápiz del número 2, un bicolor y una goma para borrar',
      'Un sacapuntas y unas tijeras de punta roma',
      'Lápices de colores de madera o pinturas de cera',
      'Pegamento'
  ];

  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumenes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log( element.scrollTop );
  }

  changeName(event: Event){
    const element    = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice( index, 1 ); //(posición, cuantos elementos quiero eliminar a partir de esa posición)
  }

  addUtil(){
    this.utilesEscolares.push(this.newUtil);
    this.newUtil = '';
  }

  deleteUtil(index: number){
    this.utilesEscolares.splice( index, 1 ); //(posición, cuantos elementos quiero eliminar a partir de esa posición)
  }





}
