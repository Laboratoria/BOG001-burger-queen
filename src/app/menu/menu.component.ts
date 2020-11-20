import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuService } from '../menu.service';
// import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Menu } from '../Interfaces/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  // public menuList: Observable<Menu[]>;
  // public menu$: Observable<Menu[]>;
  public menu$;

  constructor(private menuService: MenuService) {

  }

  ngOnInit(): void {
    // this.menuList = this.menuService.getMenu();
    // this.menu$ = this.menuService.getMenu();
    this.menuService.getMenu().pipe().subscribe(menu => {
      this.menu$ = menu;
      console.log(menu);
    });
  }

  // @Input() menu;
  // @Output() itemSelected: EventEmitter<any> = new EventEmitter();

  // addOrder(): void {
  //   console.log('añadido a la orden');
  //   this.itemSelected.emit(this.menu.id);
  // }

  // menus: any;
  // currentMenu = null;
  // currentIndex = -1;
  // title = '';

  // constructor(private menuService: MenuService) { }

  // ngOnInit(): void {
  //   this.retrieveMenu();
  // }

  // refreshList(): void {
  //   this.currentMenu = null;
  //   this.currentIndex = -1;
  //   this.retrieveMenu();
  // }

  // retrieveMenu(): void {
  //   this.menuService.getAll().snapshotChanges().pipe(
  //     map(changes =>
  //       changes.map(c =>
  //         ({ id: c.payload.doc.id, ...c.payload.doc.data() })
  //       )
  //     )
  //   ).subscribe(data => {
  //     this.menus = data;
  //   });
  // }

  // setActiveMenu(menu, index): void {
  //   this.currentMenu = menu;
  //   this.currentIndex = index;
  // }

}
