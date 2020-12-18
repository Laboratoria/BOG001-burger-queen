import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuService } from '../../Services/menu.service';
import { Menu } from '../../Interfaces/menu.model';
import { Observable } from 'rxjs';
import { OrdersService } from '../../Services/orders.service';
import { DateTime } from 'luxon';
import { Order } from '../../Interfaces/order.model';
@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.scss'],
})
export class WaiterComponent implements OnInit {
  public breakfasts$;
  public menu$;
  public lunchesAndDinners$;

  duration$: Number;
  customerName: string;
  tableNumber: Number;
  bill: Number;
  completeCounter: Number = 0;

  showingMenus: boolean = false;
  showingBreakfasts: boolean = false;
  showingLunches: boolean = false;

  items$: Observable<Menu[]>;
  ordersReady$: Observable<Order[]>;

  orderForm = this.fb.group({
    name: ['', Validators.required],
    table: ['', Validators.required],
  });

  // @Input() item: Menu;

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private ordersService: OrdersService
  ) {
    this.items$ = this.ordersService.order$;
    this.ordersReady$ = this.ordersService.ready$;

    this.ordersService.ready$.subscribe((orders) => {
      this.completeCounter = orders.length;
    });
  }

  ngOnInit(): void {
    this.getDuration();
    this.items$.forEach((arr) => {
      this.bill = arr.reduce((acc, obj) => acc + obj.price, 0);
    });

    this.menuService
      .getBreakfasts()
      .pipe()
      .subscribe((menu) => {
        this.breakfasts$ = menu;
      });

    this.menuService
      .getLunchesAndDinners()
      .pipe()
      .subscribe((menu) => {
        this.lunchesAndDinners$ = menu;
      });
  }

  showMenus() {
    const client = this.orderForm.value.name;
    const table = this.orderForm.value.table;
    if (client == undefined || table == undefined) {
      alert(
        'Por favor llena los campos de cliente y mesa para comenzar el pedido'
      );
    } else {
      if (this.showingMenus) {
        this.showingMenus = false;
      } else {
        this.showingMenus = true;
      }
    }
  }

  breakfast() {
    if (this.showingBreakfasts) {
      this.showingBreakfasts = false;
      this.showingLunches = true;
    } else {
      this.showingBreakfasts = true;
      this.showingLunches = false;
    }
  }

  lunches() {
    if (this.showingLunches) {
      this.showingLunches = false;
      this.showingBreakfasts = true;
    } else {
      this.showingLunches = true;
      this.showingBreakfasts = false;
    }
  }

  addWishes(item) {
    this.ordersService.addWishes(item);
  }

  removeWish(index) {
    this.ordersService.removeWish(index);
  }

  generateOrder() {
    const client = this.orderForm.value.name;
    const table = this.orderForm.value.table;
    const createdAt = DateTime.local();

    console.log(client, table, this.bill);

    this.ordersService
      .generateOrder(client, table, this.bill)
      .then(() => {
        alert('Orden enviada a cocina');
        this.ordersService.clearWishes();
        this.showingMenus = false;
        this.showingBreakfasts = false;
        this.showingLunches = false;
        this.orderForm.reset();
      })
      .catch((err) => {
        alert('Error: ' + err);
      });
  }

  getDuration() {
    this.ordersReady$.forEach((element) => {
      element.forEach((order) => {
        const start = order.createdAt;
        const end = Date.now();
        const totalms = end - start;
        const totalmin = totalms / 60000;
        this.duration$ = totalmin;
      });
    });
  }

  removeOrderDelivered(index) {
    this.ordersService.removeOrderDelivered(index);
  }
}
