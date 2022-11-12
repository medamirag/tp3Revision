import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';

const routes: Routes = [
  {path:"",component:ListeClientsComponent},
  {path:"client/:id",component:ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
