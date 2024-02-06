import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PartidoListaComponent} from "./partidos/partido-lista/partido-lista.component";
import {PartidosRoutingModule} from "./patidos-routing.module";
import {NgOptimizedImage} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { PartidosComponent } from './partidos/partidos.component';


@NgModule({
  declarations: [
    PartidoListaComponent,
    PartidosComponent
  ],
  imports: [
    CommonModule,
    PartidosRoutingModule,
    NgOptimizedImage,
    FormsModule
  ]
})
export class PartidosModule {
}
