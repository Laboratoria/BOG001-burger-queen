import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuService } from '../../Services/menu.service';


@Component({
  selector: 'app-add-item-menu',
  templateUrl: './add-item-menu.component.html',
  styleUrls: ['./add-item-menu.component.sass']
})
export class AddItemMenuComponent implements OnInit {

  public addItemForm: FormGroup;

  constructor(private menuService: MenuService, formBuilder: FormBuilder) {
    this.addItemForm = formBuilder.group({
      item: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

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

    this.menuService.addItem(item, price, category, time)
      .then(
        () => {
          alert('Item added successfully');
        }
      )
      .catch((err) => {
        alert('Error adding item: ' + err);
      });

    this.clearForm();

  }

  ngOnInit(): void {
  }

}
