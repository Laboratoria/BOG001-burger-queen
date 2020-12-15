import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { MenuService } from '../../Services/menu.service';

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

  showingMenus: boolean = false;
  showingBreakfasts: boolean = false;
  showingLunches: boolean = false;

  orderForm = this.fb.group({
    name: ['', Validators.required],
    table: ['', Validators.required],
  });
  // public orderForm: FormGroup;
  // name: string;
  // name = new FormControl('', Validators.required);

  // @Input() item;

  constructor(private fb: FormBuilder, private menuService: MenuService) {}

  ngOnInit(): void {
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

  // summary(item, price) {}

  // console.log(name.errors); // {required: true}
}
