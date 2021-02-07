import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../Services/orders.service';
import Duration from 'luxon/src/duration.js';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss'],
})
export class KitchenComponent implements OnInit {
  public orders$;

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  //Obtine las ordenes que se han añadido a la BD
  getOrders() {
    this.ordersService
      .getOrdersPending()
      .pipe()
      .subscribe((order) => {
        this.orders$ = order;
        console.log(this.orders$);
      });
  }

  //Agrega orden a pedidos listos del mesero
  addCompleteOrder(order, id) {
    const end = Date.now();
    const duration = end - order.createdAt;
    this.ordersService.addCompleteOrder(order);
    this.ordersService.updateStateOrder(id);
    this.ordersService.updateEndTime(id, duration);
  }

  //Elimina la orden completada de la lista de la cocina
  // removeOrderCollection(id) {
  //   this.ordersService.removeOrderCollection(id);
  //   this.getOrders();
  // }
}
