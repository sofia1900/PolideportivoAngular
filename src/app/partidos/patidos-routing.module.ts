import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PartidoListaComponent} from "./partidos/partido-lista/partido-lista.component";

const routes: Routes = [
  {path : '', component : PartidoListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PartidosRoutingModule {
}
