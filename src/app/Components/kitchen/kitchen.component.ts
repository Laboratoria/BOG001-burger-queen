import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../Services/orders.service';
@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.sass'],
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
    this.ordersService.addCompleteOrder(order);
    this.ordersService.updateStateOrder(id);
  }

  //Elimina la orden completada de la lista de la cocina
  // removeOrderCollection(id) {
  //   this.ordersService.removeOrderCollection(id);
  //   this.getOrders();
  // }
}
