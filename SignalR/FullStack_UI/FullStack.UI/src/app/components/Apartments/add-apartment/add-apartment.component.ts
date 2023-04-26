import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apartments } from 'src/app/Models/apartment.model';
import { ApartmentvillasService } from 'src/app/services/apartmentvillas.service';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent implements OnInit{
  addApartmentRequest:Apartments={
    id:0,
    name: '',
    builderName: '',
    location: '',
    price: 0,
    sqArea: 0,
    status:''
  };
  constructor(private serve:ApartmentvillasService,private router : Router) {
    
  }
  ngOnInit():void{
    
  }
  addApartment() {
    this.serve.addApartment(this.addApartmentRequest).subscribe({
      next:(data) =>{
        this.router.navigate(['apartments']);
      }
    });
  }
}
