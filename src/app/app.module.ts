import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeClientsComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
