import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Partido} from "../../../modelos/partido";
import {PartidosService} from "../../../servicios/partidos.service";

@Component({
  selector: 'app-detail-partido',
  templateUrl: './detail-partido.component.html',
  styleUrl: './detail-partido.component.css'
})
export class DetailPartidoComponent implements OnInit{
  idPartido! : number;
  partido! : Partido;

  golesLocal = 0;
  golesVisitante = 0;
  constructor(private route : ActivatedRoute, private partidoService : PartidosService) {}

  ngOnInit(){
    this.idPartido = this.route.snapshot.params['id'];
    this.partido = this.partidoService.getPartidoById(this.idPartido);
    this.golesLocal = this.contarGoles(this.partido.idLocal)
    this.golesVisitante = this.contarGoles(this.partido.idVisitante)
  }

  contarGoles(equipo : string){
    let total = 0;
    for (let gol of this.partido.goles){
      if (gol.idParticipante == equipo){
        total+=1
      }
    }
    return total
  }

}
