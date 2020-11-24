import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material';

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { MenuService } from './Services/menu.service';
import { AddItemMenuComponent } from './Components/add-item-menu/add-item-menu.component';
import { WaiterComponent } from './Components/waiter/waiter.component';
import { KitchenComponent } from './Components/kitchen/kitchen.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddItemFormComponent } from './Components/menu/add-item-form/add-item-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddItemMenuComponent,
    WaiterComponent,
    KitchenComponent,
    HomeComponent,
    HeaderComponent,
    AddItemFormComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
