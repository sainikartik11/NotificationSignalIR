import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentListComponent } from './components/Apartments/apartment-list/apartment-list.component';
import { AddApartmentComponent } from './components/Apartments/add-apartment/add-apartment.component';

const routes: Routes = [
  {
    path:'',
    component:ApartmentListComponent
  },{
    path:'apartments',
    component:ApartmentListComponent
  },
  {
    path:'apartments/add',
    component:AddApartmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
