import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PartidoListaComponent} from "./partido-lista/partido-lista.component";
import {PartidosRoutingModule} from "./patidos-routing.module";
import {NgOptimizedImage} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PartidoListaComponent
  ],
  exports : [
    PartidoListaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PartidosRoutingModule,
    NgOptimizedImage,
    FormsModule
  ]
})
export class PartidosModule {
}
