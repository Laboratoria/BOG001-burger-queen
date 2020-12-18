import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { MaterialModule } from './material';

import { MenuService } from './Services/menu.service';
import { MenuComponent } from './Components/menu/menu.component';
import { AddItemMenuComponent } from './Components/add-item-menu/add-item-menu.component';
import { WaiterComponent } from './Components/waiter/waiter.component';
import { KitchenComponent } from './Components/kitchen/kitchen.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { AddItemFormComponent } from './Components/menu/add-item-form/add-item-form.component';
//_______________ M A T E R I A L ______________________________________
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';

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
    // MaterialModule,
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
    MatCardModule,
    MatFormFieldModule,
    MatTabsModule,
    MatGridListModule,
  ],
  providers: [MenuService],
  bootstrap: [AppComponent],
})
export class AppModule {}
