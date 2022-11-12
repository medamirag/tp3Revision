import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
listeClient:Client[]=[
  {id:1,nom:"client1",telephone:"123456789"},
  {id:2,nom:"client2",telephone:"123456789"},
  {id:3,nom:"client3",telephone:"123456789"},
  {id:4,nom:"client4",telephone:"123456789"},
  {id:5,nom:"client5",telephone:"123456789"},
]
  constructor(private http:HttpClient) { }
  baseApi=environment.BASEAPI
getAll():Client[]{
  return this.listeClient
}



}
