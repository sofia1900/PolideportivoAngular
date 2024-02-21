import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SucesosComponent } from './sucesos/sucesos.component';
import {RouterLink, RouterOutlet} from "@angular/router";
@NgModule({
  declarations: [
    SucesosComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet
  ]
})
export class SucesosModule { }
