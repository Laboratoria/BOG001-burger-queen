import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './Components/menu/menu.component';
import { HomeComponent } from './Components/home/home.component';
import { KitchenComponent } from './Components/kitchen/kitchen.component';
import { WaiterComponent } from './Components/waiter/waiter.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'mesero',
    component: WaiterComponent
  },
  {
    path: 'cocina',
    component: KitchenComponent
  },
  {
    path: 'administracion',
    component: MenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
