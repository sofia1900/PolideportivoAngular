import {Component, OnInit} from '@angular/core';
import {Gol} from "../../../../modelos/partido";
import {ActivatedRoute} from "@angular/router";
import {EquiposService} from "../../../../servicios/equipos.service";

@Component({
  selector: 'app-equipo-goles',
  templateUrl: './equipo-goles.component.html',
  styleUrl: './equipo-goles.component.css'
})
export class EquipoGolesComponent implements OnInit {
  idEquipo! : string;
  goles : Gol[] = []

  constructor(private route : ActivatedRoute, private equipoService : EquiposService) {}

  ngOnInit(){
    this.idEquipo = this.route.snapshot.params['id'];
    this.goles = this.equipoService.buscarGoles(this.idEquipo)
  }
}
