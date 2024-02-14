import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PartidoListaComponent} from "./partidos/partido-lista/partido-lista.component";
import {NewPartidoComponent} from "./partidos/new-partido/new-partido.component";
import {DetailPartidoComponent} from "./partidos/detail-partido/detail-partido.component";

const routes: Routes = [
  {path : '', component : PartidoListaComponent},
  {path: 'new', component : NewPartidoComponent},
  {path: 'detail/:id', component : DetailPartidoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidosRoutingModule {
}
