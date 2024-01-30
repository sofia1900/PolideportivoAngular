import { Component } from '@angular/core';
import {PartidosService} from "../../servicios/partidos.service";

@Component({
  selector: 'app-partido-lista',
  templateUrl: './partido-lista.component.html',
  styleUrl: './partido-lista.component.css'
})
export class PartidoListaComponent {

  constructor(private service : PartidosService) {}



}
