import {Component, OnInit} from '@angular/core';
import {Tarjeta} from "../../../../modelos/partido";
import {ActivatedRoute} from "@angular/router";
import {EquiposService} from "../../../../servicios/equipos.service";

@Component({
  selector: 'app-equipo-tarjetas',
  templateUrl: './equipo-tarjetas.component.html',
  styleUrl: './equipo-tarjetas.component.css'
})
export class EquipoTarjetasComponent implements OnInit{
  idEquipo! : string;
  tarjetas : Tarjeta[] = []

  constructor(private route : ActivatedRoute, private equipoService : EquiposService) {}

  ngOnInit(){
    this.idEquipo = this.route.snapshot.params['id'];
    this.tarjetas = this.equipoService.buscarTarjetas(this.idEquipo)
  }
}
