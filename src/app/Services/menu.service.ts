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

  // getMenu(): Observable<Menu[]> {
  //   return this.menuDb.snapshotChanges().pipe(
  //     map(changes => {
  //       return changes.map(c => ({ id: c.payload.val().id, ...c.payload.val() }));
  //     })
  //   );
  // }


  getMenu(): Observable<Menu[]> {
    return this.firestore.collection<Menu>('menu').valueChanges();
  }

  // addItemMenu(menu: Menu) {
  //   return this.menuDb.push(menu);
  // }

  // deleteItemMenu(id) {
  //   this.db.list('/menu').remove(id);
  // }


  // getAll(): AngularFirestoreCollection<Menu> {
  // console.log(this.tutorialsRef.get().then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         console.log(`${doc.id} => ${doc.data()}`);
  //       });)
  // return this.tutorialsRef;
}



  // setItem(): void {
  //   const ref = this.db.doc('menu');
  //   ref.set({ title: 'zkoder cafe' });
  // }

  // getAllMenu(): void {
  //   this.db.collection('menu').get().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       console.log(`${doc.id} => ${doc.data()}`);
  //     });
  //   });
  // }
// }
