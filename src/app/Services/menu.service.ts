import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Menu } from '../Interfaces/menu.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MenuService {

  // private menuDb: AngularFireList<Menu>;


  constructor(public firestore: AngularFirestore) {
    // this.menuDb = this.db.list('/menu', ref => ref.orderByChild('time'));
  }

  addItem(item: string, price: number, category: string, time: Array<string>): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`menu/${id}`).set({
      item, price, category, time
    });
  }

  deleteItem(itemId: string): Promise<void> {
    return this.firestore.doc(`menu/${itemId}`).delete();
  }

  getMenu(): Observable<Menu[]> {
    console.log(this.firestore.collection<Menu>('menu').valueChanges());
    return this.firestore.collection<Menu>('menu').valueChanges({ idField: 'id' });
  }

}



  // setItem(): void {
  //   const ref = this.db.doc('menu');
  //   ref.set({ title: 'zkoder cafe' });
  // }

