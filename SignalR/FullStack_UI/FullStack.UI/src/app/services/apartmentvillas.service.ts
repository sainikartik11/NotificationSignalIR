import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Apartments } from '../Models/apartment.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { EmitHelper } from 'typescript';
import * as signalR from '@microsoft/signalr';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class ApartmentvillasService {
  // private hubConnection: HubConnection;
  baseUrl:string= environment.baseApiUrl;

  constructor(private http: HttpClient)
  {
    // this.hubConnection = new HubConnectionBuilder()
    //   .withUrl('https://localhost:7196/api/VillaApi/NotificationHub')
    //   .build();

    // this.hubConnection.start()
    //   .then(() => console.log('SignalR connection established.'))
    //   .catch((error: any) => console.error('SignalR connection error: ', error));

    // this.hubConnection.on('SendNotification', (message: string) => {
    //   console.log(`Notification received: ${message}`);
    // });
  }
  
  // sendAlert(): Observable<void> {
  //   return Observable.create((observer: any) => {
  //     this.hubConnection.invoke('SendMessage',"booking done")
  //       .then(() => {
  //         observer.next();
  //         observer.complete();
  //       })
  //       .catch((error: any) => {
  //         observer.error(error);
  //       });
  //   });
  // }


  getAllApartments():Observable<Apartments[]>{
    return this.http.get<Apartments[]>(this.baseUrl+'/api/VillaApi/getall');
  }

  addApartment(addApartmentRequest:Apartments):Observable<Apartments>
  {
    return this.http.post<Apartments>(this.baseUrl+'/api/VillaApi',addApartmentRequest);
  }
  startLongRunningProcess() {
    return fetch('https://your-api-url/long-running-process', {
      method: 'GET'
    });
}

}