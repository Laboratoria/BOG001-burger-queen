import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemMenuComponent } from './add-item-menu.component';

describe('AddItemMenuComponent', () => {
  let component: AddItemMenuComponent;
  let fixture: ComponentFixture<AddItemMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
