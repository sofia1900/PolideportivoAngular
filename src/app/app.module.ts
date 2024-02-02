import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ComunModule} from "./comun/comun.module";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {PartidosModule} from "./partidos/partidos.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ComunModule,
    NgOptimizedImage,
    PartidosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
