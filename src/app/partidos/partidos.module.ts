import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PartidoListaComponent} from "./partidos/partido-lista/partido-lista.component";
import {PartidosRoutingModule} from "./patidos-routing.module";
import {NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PartidosComponent } from './partidos/partidos.component';
import { NewPartidoComponent } from './partidos/new-partido/new-partido.component';
import { DetailPartidoComponent } from './partidos/detail-partido/detail-partido.component';
import { EditPartidoComponent } from './partidos/edit-partido/edit-partido.component';


@NgModule({
  declarations: [
    PartidoListaComponent,
    PartidosComponent,
    NewPartidoComponent,
    DetailPartidoComponent,
    EditPartidoComponent
  ],
  imports: [
    CommonModule,
    PartidosRoutingModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PartidosModule {
}
