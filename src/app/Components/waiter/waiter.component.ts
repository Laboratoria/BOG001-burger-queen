import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuService } from '../../Services/menu.service';
import { Menu } from '../../Interfaces/menu.model';
import { Observable } from 'rxjs';
import { OrdersService } from '../../Services/orders.service';
import { Order } from '../../Interfaces/order.model';
import Duration from 'luxon/src/duration.js';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.scss'],
})
export class WaiterComponent implements OnInit {
  public breakfasts$;
  public menu$;
  public lunchesAndDinners$;
  public ordersCompleted$;
  prueba;
  duration$: Number;
  duration: Number;
  bill: Number;
  tableNumber: Number;
  customerName: string;
  completeCounter: Number = 0;
  showingMenus: boolean = false;
  showingBreakfasts: boolean = false;
  showingLunches: boolean = false;
  showingSummary: boolean = false;
  items$: Observable<Menu[]>;
  // customerName: string;
  // tableNumber: Number;
  // ordersReady$: Observable<Order[]>;
  // @Input() item: Menu;

  orderForm = this.fb.group({
    name: ['', Validators.required],
    table: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private ordersService: OrdersService
  ) {
    this.items$ = this.ordersService.order$;
    // this.ordersReady$ = this.ordersService.ready$;

    this.ordersService.ready$.subscribe((orders) => {
      this.completeCounter = orders.length;
    });
  }

  ngOnInit(): void {
    this.getOrdersCompleted();

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

  summary() {
    this.items$.forEach((element) => {
      if (element.length >= 1) {
        this.showingSummary = true;
      } else this.showingSummary = false;
    });
  }

  //Funciones sección resumen de pedidos
  addWishes(item) {
    this.ordersService.addWishes(item);
    this.summary();
  }

  removeWish(index) {
    this.ordersService.removeWish(index);
  }

  generateOrder() {
    const client = this.orderForm.value.name;
    const table = this.orderForm.value.table;
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

  getDuration(order) {
    this.prueba = Duration.fromMillis(order.duration);
    return this.prueba;
  }

  updateStateDelivered(id, index) {
    this.ordersService.updateStateDelivered(id);
    this.ordersService.removeNotificationCounter(index);
  }

  //Obtine las ordenes completadas de firestore segun el estado
  getOrdersCompleted() {
    this.ordersService
      .getOrdersCompleted()
      .pipe()
      .subscribe((order) => {
        this.ordersCompleted$ = order;
      });
  }
}
