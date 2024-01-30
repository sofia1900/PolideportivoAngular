import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PartidoListaComponent} from "./partido-lista/partido-lista.component";
import {PartidosRoutingModule} from "./patidos-routing.module";



@NgModule({
  declarations: [
    PartidoListaComponent
  ],
  imports: [
    CommonModule,
    PartidosRoutingModule
  ]
})
export class PartidosModule { }
