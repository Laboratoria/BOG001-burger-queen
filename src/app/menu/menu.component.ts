import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  @Input() menu;
  @Output() itemSelected: EventEmitter<any> = new EventEmitter();

  addOrder(): void {
    console.log('añadido a la orden');
    this.itemSelected.emit(this.menu.id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
