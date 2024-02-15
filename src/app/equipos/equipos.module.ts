import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquiposComponent } from './equipos/equipos.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { EquiposListaComponent } from './equipos/equipos-lista/equipos-lista.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EquiposRoutingModule} from "./equipos-routing.module";



@NgModule({
  declarations: [
    EquiposComponent,
    EquiposListaComponent
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
