import {Component, OnInit} from '@angular/core';
import {PartidosService} from "../../../servicios/partidos.service";
import {Partido} from "../../../modelos/partido";

@Component({
  selector: 'app-partido-lista',
  templateUrl: './partido-lista.component.html',
  styleUrl: './partido-lista.component.css'
})
export class PartidoListaComponent implements OnInit {

  partidos: Partido[] = []
  buscador: string = ""
  constructor(private service: PartidosService) {
  }

  ngOnInit() {
    this.service.getPartidos().subscribe(partidos =>
      this.partidos = partidos)
  }

  partidosFiltrados() {
    return this.partidos.filter(partido =>
      partido.idLocal.toLowerCase().includes(this.buscador.toLowerCase()) ||
      partido.idVisitante.toLowerCase().includes(this.buscador.toLowerCase()))
  }


}
