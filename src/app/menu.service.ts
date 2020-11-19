import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Menu } from './Interfaces/menu.model';
// import { AngularFireList } from 'angularfire2/database'


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  // private menuDb: AngularFireList<Menu>;

  private dbPath = '/menu';
  tutorialsRef: AngularFirestoreCollection<Menu> = null;

  constructor(
    private http: HttpClient,
    private db: AngularFirestore
  ) {
    this.tutorialsRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Menu> {
    // console.log(this.tutorialsRef.get().then((querySnapshot) => {
    //       querySnapshot.forEach((doc) => {
    //         console.log(`${doc.id} => ${doc.data()}`);
    //       });)
    return this.tutorialsRef;
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
}
