import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PartidoListaComponent} from "./partido-lista/partido-lista.component";
import {PartidosRoutingModule} from "./patidos-routing.module";
import {NgOptimizedImage} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    PartidoListaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PartidosRoutingModule,
    NgOptimizedImage
  ]
})
export class PartidosModule {
}
