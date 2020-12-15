import { Component, OnInit } from '@angular/core';
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

  showingMenus: boolean = false;
  showingBreakfasts: boolean = false;

  orderForm = this.fb.group({
    name: ['', Validators.required],
    table: ['', Validators.required],
  });
  // public orderForm: FormGroup;
  // name: string;
  // name = new FormControl('', Validators.required);

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
    } else {
      this.showingBreakfasts = true;
    }
  }

  // console.log(name.errors); // {required: true}
}
