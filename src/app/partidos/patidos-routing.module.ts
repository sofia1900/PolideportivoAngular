import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PartidoListaComponent} from "./partidos/partido-lista/partido-lista.component";
import {NewPartidoComponent} from "./partidos/new-partido/new-partido.component";

const routes: Routes = [
  {path : '', component : PartidoListaComponent},
  {path: 'new', component : NewPartidoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidosRoutingModule {
}
