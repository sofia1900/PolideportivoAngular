import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquiposComponent } from './equipos/equipos.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { EquiposListaComponent } from './equipos/equipos-lista/equipos-lista.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EquiposRoutingModule} from "./equipos-routing.module";
import { EquipoDetalleComponent } from './equipos/equipo-detalle/equipo-detalle.component';
import { EquipoPartidosComponent } from './equipos/equipo-detalle/equipo-partidos/equipo-partidos.component';



@NgModule({
  declarations: [
    EquiposComponent,
    EquiposListaComponent,
    EquipoDetalleComponent,
    EquipoPartidosComponent
  ],
  imports: [
    EquiposRoutingModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EquiposModule { }
