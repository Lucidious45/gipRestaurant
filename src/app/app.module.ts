import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TakeawayComponent } from './takeaway/takeaway.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { ReserverenComponent } from './reserveren/reserveren.component';
import { AdminComponent } from './admin/admin.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';



@NgModule({
  declarations: [									
    AppComponent,
      TakeawayComponent,
      MenuComponent,
      ContactComponent,
      MenuComponent,
      ContactComponent,
      ReserverenComponent,
      ReserverenComponent,
      AdminComponent,
      AboutUsComponent,
      CartComponent,
      ProductComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
