import { Component } from '@angular/core';
import { Menu } from './Interfaces/menu.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'burger-queen';

  // menus: Menu[] = [
  //   {
  //     id: 1,
  //     item: 'Café americano',
  //     price: 5,
  //     category: 'bedidas',
  //     time: ['breakfast']
  //   },
  //   {
  //     id: 2,
  //     item: 'Café con leche',
  //     price: 7,
  //     category: 'bebidas',
  //     time: ['breakfast']

  //   },
  //   {
  //     id: 3,
  //     item: 'Sandwich de jamón y queso',
  //     price: 10,
  //     category: 'sandwich',
  //     time: ['breakfast']

  //   },
  //   {
  //     id: 4,
  //     item: 'Jugo de frutas natural',
  //     price: 7,
  //     category: 'bebidas',
  //     time: ['breakfast']

  //   },
  //   {
  //     id: 5,
  //     item: 'Hamburguesa simple',
  //     price: 10,
  //     category: 'hamburguesas',
  //     time: ['after noon']
  //   },
  //   {
  //     id: 6,
  //     item: 'Hamburguesa doble',
  //     price: 15,
  //     category: 'hamburguesas',
  //     time: ['after noon']

  //   },
  //   {
  //     id: 7,
  //     item: 'Papas fritas',
  //     price: 5,
  //     category: 'acompañamientos',
  //     time: ['after noon']

  //   },
  //   {
  //     id: 8,
  //     item: 'Aros de cebolla',
  //     price: 5,
  //     category: 'acompañamientos',
  //     time: ['after noon']

  //   },
  //   {
  //     id: 9,
  //     item: 'Agua 500ml',
  //     price: 5,
  //     category: 'bebidas',
  //     time: ['after noon']

  //   },
  //   {
  //     id: 10,
  //     item: 'Agua 750ml',
  //     price: 7,
  //     category: 'bebidas',
  //     time: ['after noon']

  //   },
  //   {
  //     id: 11,
  //     item: 'Bebida/gaseosa 500ml',
  //     price: 7,
  //     category: 'bebidas',
  //     time: ['after noon']

  //   },
  //   {
  //     id: 12,
  //     item: 'Bebida/gaseosa 750ml',
  //     price: 10,
  //     category: 'bebidas',
  //     time: ['after noon']

  //   },
  // ];

  clickItem(id: number): void {
    console.log('item');
    console.log(id);
  }
}
