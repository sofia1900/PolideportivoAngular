import {Component, OnInit} from '@angular/core';
import {PartidosService} from "../../servicios/partidos.service";
import {Partido} from "../../modelos/partido";

@Component({
  selector: 'app-partido-lista',
  templateUrl: './partido-lista.component.html',
  styleUrl: './partido-lista.component.css'
})
export class PartidoListaComponent implements OnInit {

  partidos: Partido[] = []

  constructor(private service: PartidosService) {
  }

  ngOnInit() {
    this.service.getPartidos().subscribe(partidos =>
      this.partidos = partidos)
  }


}
