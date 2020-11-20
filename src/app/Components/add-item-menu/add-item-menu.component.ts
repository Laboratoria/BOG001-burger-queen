import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuService } from '../../Services/menu.service';


@Component({
  selector: 'app-add-item-menu',
  templateUrl: './add-item-menu.component.html',
  styleUrls: ['./add-item-menu.component.sass']
})
export class AddItemMenuComponent implements OnInit {
  // addItemForm = createSongForm
  // addItem() = createSong();

  public addItemForm: FormGroup;

  constructor(private menuService: MenuService, formBuilder: FormBuilder) {
    this.addItemForm = formBuilder.group({
      id: ['', Validators.required],
      item: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  addItem(): any {
    const id = this.addItemForm.value.id;
    const item = this.addItemForm.value.item;
    const price = this.addItemForm.value.price;
    const category = this.addItemForm.value.category;
    const time = this.addItemForm.value.time;

    this.menuService.addItem(id, item, price, category, time);
    // .then(
    //   () => {
    //     loading.dismiss().then(() => {
    //       this.router.navigateByUrl('');
    //     });
    //   },
    //   error => {
    //     loading.dismiss().then(() => {
    //       console.error(error);
    //     });
    //   }
    // );

  }

  ngOnInit(): void {
  }

}
