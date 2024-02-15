import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Equipo} from "../../../modelos/equipo";
import {EquiposService} from "../../../servicios/equipos.service";

@Component({
  selector: 'app-equipo-detalle',
  templateUrl: './equipo-detalle.component.html',
  styleUrl: './equipo-detalle.component.css'
})
export class EquipoDetalleComponent implements OnInit{

  idEquipo! : string
  equipo! : Equipo
  constructor(private route : ActivatedRoute, private service : EquiposService){}
  ngOnInit() {
    this.idEquipo = this.route.snapshot.params['id'];
    this.equipo = this.service.buscarEquipo(this.idEquipo)
  }

}
