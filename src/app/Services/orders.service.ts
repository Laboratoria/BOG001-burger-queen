import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu } from '../Interfaces/menu.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../Interfaces/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private wishes: Menu[] = [];
  private order = new BehaviorSubject<Menu[]>([]);

  order$ = this.order.asObservable();

  constructor(private firestore: AngularFirestore) {}

  addWishes(wish: Menu) {
    this.wishes = [...this.wishes, wish];
    this.order.next(this.wishes);
  }

  removeWish(index) {
    this.wishes = this.wishes.filter((item, i) => i !== index);
    this.order.next(this.wishes);
  }

  generateOrder(name: string, table: number, bill: Number): Promise<void> {
    const items = this.wishes;
    const createdAt = Date.now();
    const id = this.firestore.createId();
    return this.firestore.doc(`orders/${id}`).set({
      name,
      table,
      bill,
      items,
      createdAt,
    });
  }

  clearWishes() {
    for (let i = 0; i <= this.wishes.length; i++) {
      this.wishes.pop();
      this.order.next(this.wishes);
    }
  }
}
