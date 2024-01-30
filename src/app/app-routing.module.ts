import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./comun/home/home.component";
import {PartidoListaComponent} from "./partidos/partido-lista/partido-lista.component";

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path : 'partidos' , component:  PartidoListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
