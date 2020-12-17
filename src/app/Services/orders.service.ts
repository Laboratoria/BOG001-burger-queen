import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu } from '../Interfaces/menu.model';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private wishes: Menu[] = [];
  private order = new BehaviorSubject<Menu[]>([]);

  order$ = this.order.asObservable();

  constructor() {}

  addWishes(wish: Menu) {
    this.wishes = [...this.wishes, wish];
    this.order.next(this.wishes);
  }

  removeWish(index) {
    this.wishes = this.wishes.filter((item, i) => i !== index);
    this.order.next(this.wishes);
  }
}
