import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu } from '../Interfaces/menu.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../Interfaces/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  //waiter resumen de pedido
  private wishes: Menu[] = [];
  private order = new BehaviorSubject<Menu[]>([]);
  order$ = this.order.asObservable();

  //kitchen pedidos marcados como listos
  private ordersCompleted: Order[] = [];
  private ready = new BehaviorSubject<Order[]>([]);
  ready$ = this.ready.asObservable();

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
    const state = 'pending';
    return this.firestore.doc(`orders/${id}`).set({
      name,
      table,
      bill,
      items,
      createdAt,
      state,
    });
  }

  clearWishes() {
    this.wishes = [];
    this.order.next(this.wishes);
  }

  getOrdersPending(): Observable<Order[]> {
    console.log(this.firestore.collection<Order>('orders').valueChanges());
    return this.firestore
      .collection<Order>('orders', (order) =>
        order.where('state', '==', 'pending').orderBy('createdAt', 'asc')
      )
      .valueChanges({ idField: 'id' });
  }

  addCompleteOrder(order: Order) {
    this.ordersCompleted = [...this.ordersCompleted, order];
    this.ready.next(this.ordersCompleted);
    console.log(this.ready$);
  }

  removeNotificationCounter(index) {
    this.ordersCompleted = this.ordersCompleted.filter(
      (item, i) => i !== index
    );
    this.ready.next(this.ordersCompleted);
  }

  removeOrderCollection(itemId: string) {
    return this.firestore.doc(`orders/${itemId}`).delete();
  }

  updateStateOrder(id) {
    this.firestore.doc(`orders/${id}`).update({
      state: 'completed',
    });
  }

  getOrdersCompleted(): Observable<Order[]> {
    return this.firestore
      .collection<Order>('orders', (order) =>
        order.where('state', '==', 'completed').orderBy('createdAt', 'asc')
      )
      .valueChanges({ idField: 'id' });
  }

  updateStateDelivered(id) {
    this.firestore.doc(`orders/${id}`).update({
      state: 'delivered',
    });
  }

  updateEndTime(id, duration) {
    this.firestore.doc(`orders/${id}`).update({
      duration: duration,
    });
  }
}
