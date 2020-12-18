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
    this.ordersService
      .getOrder()
      .pipe()
      .subscribe((order) => {
        this.orders$ = order;
        console.log(this.orders$);
      });
  }

  addCompleteOrder(order) {
    this.ordersService.addCompleteOrder(order);
  }
}
