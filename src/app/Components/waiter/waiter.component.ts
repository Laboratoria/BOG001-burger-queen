import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { MenuService } from '../../Services/menu.service';
import { Menu } from '../../Interfaces/menu.model';
import { bindCallback, Observable } from 'rxjs';
import { OrdersService } from '../../Services/orders.service';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.scss'],
})
export class WaiterComponent implements OnInit {
  public breakfasts$;
  public menu$;
  public lunchesAndDinners$;

  customerName: string;
  tableNumber: Number;
  // bill: Array<Number> = [];
  bill: Number;

  showingMenus: boolean = false;
  showingBreakfasts: boolean = false;
  showingLunches: boolean = false;

  items$: Observable<Menu[]>;
  // wishes: Menu[] =[];

  orderForm = this.fb.group({
    name: ['', Validators.required],
    table: ['', Validators.required],
  });
  // public orderForm: FormGroup;
  // name: string;
  // name = new FormControl('', Validators.required);

  // @Input() item: Menu;

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private ordersService: OrdersService
  ) {
    this.items$ = this.ordersService.order$;
    // console.log(this.items$);
  }

  ngOnInit(): void {
    this.items$.forEach((arr) => {
      this.bill = arr.reduce((acc, obj) => acc + obj.price, 0);
      console.log(this.bill);
    });

    // console.log(this.name.errors);
    // this.initForm();
    // console.log(this.name.errors);

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
    if (this.showingMenus) {
      this.showingMenus = false;
    } else {
      this.showingMenus = true;
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
    // console.log(item);
    this.ordersService.addWishes(item);
  }

  sumPrices() {
    this.items$.forEach((arr) => {
      this.bill = arr.reduce((acc, obj) => acc + obj.price, 0);
      console.log(this.bill);
    });
  }

  // summary(item, price) {}

  // console.log(name.errors); // {required: true}
}
