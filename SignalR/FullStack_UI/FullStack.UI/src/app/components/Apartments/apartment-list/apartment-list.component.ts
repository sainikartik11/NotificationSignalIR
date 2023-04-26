import { Component,OnInit } from '@angular/core';
import { Apartments } from 'src/app/Models/apartment.model';
import { ApartmentvillasService } from 'src/app/services/apartmentvillas.service';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css'],
})
export class ApartmentListComponent implements OnInit{
  private hubConnection: HubConnection=new HubConnectionBuilder()
  .withUrl('https://localhost:7196/NotificationHub')
  .build();
 
  apartments:Apartments[]=[];
  constructor(private serve:ApartmentvillasService ){
  }
  ngOnInit(): void {
    this.serve.getAllApartments().subscribe({
        next:(response)=>{
          this.apartments=response;
            console.log(response);
        }
    });
      ////////////////////////////////////////////////////
    this.hubConnection.start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.error('Error while establishing connection :('));
    
    this.hubConnection.on('SendNotification', (message: string) => {
      console.log(`Received notification: ${message}`);
      alert(message);
    });


  }
  sendAlert() {
    alert("Booking Process Started ");
    this.hubConnection.invoke('SendMessage', 'Booking Compeleted');
  }
}
