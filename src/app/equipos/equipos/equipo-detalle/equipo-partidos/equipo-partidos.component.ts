import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Partido} from "../../../../modelos/partido";
import {PartidosService} from "../../../../servicios/partidos.service";

@Component({
  selector: 'app-equipo-partidos',
  templateUrl: './equipo-partidos.component.html',
  styleUrl: './equipo-partidos.component.css'
})
export class EquipoPartidosComponent implements OnInit {
  idEquipo! : string;
  partidos : Partido[] = []

  constructor(private route : ActivatedRoute, private partidosService : PartidosService) {}

  ngOnInit(){
    this.idEquipo = this.route.snapshot.params['id'];
    this.partidos = this.partidosService.partidosEquipo(this.idEquipo)
  }

}
