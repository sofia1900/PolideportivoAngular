import {Component, OnInit} from '@angular/core';
import {PartidosService} from "../../../servicios/partidos.service";
import {Equipo} from "../../../modelos/equipo";
import {EquiposService} from "../../../servicios/equipos.service";
import {Partido} from "../../../modelos/partido";

@Component({
  selector: 'app-equipos-lista',
  templateUrl: './equipos-lista.component.html',
  styleUrl: './equipos-lista.component.css'
})
export class EquiposListaComponent implements OnInit {

  equipos: Equipo[] = []
  buscador: string = ""

  constructor(private service: EquiposService, private servicePatidos : PartidosService) {
  }

  ngOnInit() {
    this.service.getEquipos().subscribe(equipos =>
      this.equipos = equipos
    )
  }

  equiposFiltrados() {
    return this.equipos.filter(equipo =>
      equipo.id.toLowerCase().includes(this.buscador.toLowerCase())
    )
  }

  verPartidos (equipo : string) {
    return this.servicePatidos.contarPartidos(equipo)
  }


}
