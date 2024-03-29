import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {EquiposListaComponent} from "./equipos/equipos-lista/equipos-lista.component";
import {EquipoDetalleComponent} from "./equipos/equipo-detalle/equipo-detalle.component";
import {EquipoPartidosComponent} from "./equipos/equipo-detalle/equipo-partidos/equipo-partidos.component";
import {EquipoGolesComponent} from "./equipos/equipo-detalle/equipo-goles/equipo-goles.component";
import {EquipoTarjetasComponent} from "./equipos/equipo-detalle/equipo-tarjetas/equipo-tarjetas.component";

const routes: Routes = [
  {path:'', component: EquiposListaComponent},
  {path: 'detalle/:id', component: EquipoDetalleComponent,
  children : [
    {path: 'equipo-partidos/:id' , component : EquipoPartidosComponent},
    {path: 'equipo-goles/:id' , component : EquipoGolesComponent},
    {path: 'equipo-tarjetas/:id' , component : EquipoTarjetasComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquiposRoutingModule {
}
