import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuService } from '../../../Services/menu.service';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss'],
})
export class AddItemFormComponent {
  addItemForm = this.fb.group({
    item: [null, Validators.required],
    price: ['', Validators.required],
    category: [null, Validators.required],
    time: [null, Validators.required],
  });

  times = [
    { name: 'Breakfast', cod: 0 },
    { name: 'After noon', cod: 1 },
    { name: 'All day', cod: 2 },
  ];

  categories = [
    { name: 'Starter', cod: 0 },
    { name: 'Main Course', cod: 1 },
    { name: 'Side Dish', cod: 2 },
    { name: 'Fast Food', cod: 3 },
    { name: 'Dessert', cod: 4 },
    { name: 'Drinks', cod: 5 },
    { name: 'Other', cod: 6 },
  ];

  constructor(private fb: FormBuilder, private menuService: MenuService) {}

  clearForm(): void {
    this.addItemForm.reset({
      item: '',
      price: '',
      category: '',
      time: '',
    });
  }

  addItem(): any {
    const item = this.addItemForm.value.item;
    const price = this.addItemForm.value.price;
    const category = this.addItemForm.value.category;
    const time = this.addItemForm.value.time;

    this.menuService
      .addItem(item, price, category, time)
      .then(() => {
        alert('Item added successfully');
      })
      .catch((err) => {
        alert('Error adding item: ' + err);
      });

    this.clearForm();
  }
}
