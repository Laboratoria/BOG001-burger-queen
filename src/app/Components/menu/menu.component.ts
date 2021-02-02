import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ValueProvider,
} from '@angular/core';
import { MenuService } from '../../Services/menu.service';
import { Observable } from 'rxjs';
import { Menu } from '../../Interfaces/menu.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  displayedColumns: string[] = ['item', 'price', 'time', 'category', 'delete'];
  // dataSource = this.menu$;
  // public menuList: Observable<Menu[]>;
  // public menu$: Observable<Menu[]>;
  public menu$;
  public breakfasts$;
  public itemId: string;

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.menuService
      .getMenu()
      .pipe()
      .subscribe((menu) => {
        this.menu$ = menu;
        console.log(this.menu$);
      });
    // Prueba de filtrado --esto no va aqui--
    // this.menuService
    //   .getBreakfasts()
    //   .pipe()
    //   .subscribe((menu) => {
    //     this.breakfasts$ = menu;
    //   });
  }

  deleteItem(itemId: string): void {
    console.log(itemId);
    const confirmation = confirm(
      'Estas seguro de que deseas eliminar este item?'
    );
    if (confirmation) {
      this.menuService.deleteItem(itemId);
    }
  }

  // values(item: string, price: number, category: string, time: Array<string>): void {
  //   this.menuService.currentValues(item, price, category, time);
  // }

  // updateItem(id): void {
  //   this.values(this.menu$.item, this.menu$.price, this.menu$.category, this.menu$.time);
  // }

  // @Input() menu;
  // @Output() itemSelected: EventEmitter<any> = new EventEmitter();

  // addOrder(): void {
  //   console.log('añadido a la orden');
  //   this.itemSelected.emit(this.menu.id);
  // }
}
