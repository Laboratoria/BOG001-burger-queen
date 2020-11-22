import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuService } from '../../Services/menu.service';
import { Observable } from 'rxjs';
import { Menu } from '../../Interfaces/menu.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  // public menuList: Observable<Menu[]>;
  // public menu$: Observable<Menu[]>;
  public menu$;
  public itemId: string;

  constructor(private menuService: MenuService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.menuService.getMenu().pipe().subscribe(menu => {
      this.menu$ = menu;
      console.log(this.menu$);
    });
  }

  deleteItem(itemId: string): void {
    console.log(itemId);
    const confirmation = confirm('Estas seguro de que deseas eliminar este item?');
    if (confirmation) {
      this.menuService.deleteItem(itemId);
    }
  }

  // @Input() menu;
  // @Output() itemSelected: EventEmitter<any> = new EventEmitter();

  // addOrder(): void {
  //   console.log('añadido a la orden');
  //   this.itemSelected.emit(this.menu.id);
  // }

}
