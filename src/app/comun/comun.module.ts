import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  exports : [
    CabeceraComponent,
    PieComponent,
    HomeComponent
  ],
  declarations: [
    HomeComponent,
    CabeceraComponent,
    PieComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComunModule { }
