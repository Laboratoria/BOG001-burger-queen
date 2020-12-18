import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Menu } from '../Interfaces/menu.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  // private menuDb: AngularFireList<Menu>;

  constructor(public firestore: AngularFirestore) {
    // this.menuDb = this.db.list('/menu', ref => ref.orderByChild('time'));
  }

  addItem(
    item: string,
    price: number,
    category: string,
    time: Array<string>
  ): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`menu/${id}`).set({
      item,
      price,
      category,
      time,
    });
  }

  deleteItem(itemId: string): Promise<void> {
    return this.firestore.doc(`menu/${itemId}`).delete();
  }

  getMenu(): Observable<Menu[]> {
    console.log(this.firestore.collection<Menu>('menu').valueChanges());
    return this.firestore
      .collection<Menu>('menu')
      .valueChanges({ idField: 'id' });
  }

  getBreakfasts(): Observable<Menu[]> {
    console.log(
      this.firestore
        .collection<Menu>('menu', (ref) => ref.where('time', '==', 0))
        .valueChanges({ idField: 'id' })
    );
    return this.firestore
      .collection<Menu>('menu', (ref) => ref.where('time', '==', 0))
      .valueChanges({ idField: 'id' });
  }

  getLunchesAndDinners(): Observable<Menu[]> {
    console.log(
      this.firestore
        .collection<Menu>('menu', (ref) => ref.where('time', '==', 1))
        .valueChanges({ idField: 'id' })
    );
    return this.firestore
      .collection<Menu>('menu', (ref) => ref.where('time', '==', 1))
      .valueChanges({ idField: 'id' });
  }

  //---- PRUEBAS NO FUNCIONA:
  // setItem(): void {
  //   this.firestore.doc(`menu/${itemId}`).update()
  //   const ref = this.db.doc('menu');
  //   ref.set({ title: 'zkoder cafe' });
  // }

  // currentValues(item, price, category, time): any {
  //   return ({ item, price, category, time });
  // }

  // FieldsForm(itemField, priceField, categoryField, timeField): any {
  //   return ({ itemField, priceField, categoryField, timeField });
  // }

  // updateItem(currentValues, FieldsForm): void {
  //   const values = currentValues();
  //   const fields = FieldsForm();
  //   fields.itemField.setValue(values.item);
  //   fields.priceField.setValue(values.price);
  //   fields.categoryField.setValue(values.category);
  //   fields.timeField.setValue(values.time);
  // }
}
