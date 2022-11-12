import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.scss']
})
export class ListeClientsComponent implements OnInit {
listeCLient:Client[]=[]

  constructor(private serviceClient:ClientService) { }

  ngOnInit(): void {
   this.listeCLient= this.serviceClient.getAll()
  }

}
