import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApartmentListComponent } from './components/Apartments/apartment-list/apartment-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddApartmentComponent } from './components/Apartments/add-apartment/add-apartment.component';
import { FormsModule } from '@angular/forms';

import { ApartmentvillasService } from 'src/app/services/apartmentvillas.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ApartmentListComponent,
    AddApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
