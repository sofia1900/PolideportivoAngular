import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Equipo} from "../modelos/equipo";
import {equipos_data} from "../data/equipos";
import {PartidosService} from "./partidos.service";
import {Gol, Partido, Tarjeta} from "../modelos/partido";

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  partidos : Partido[] = []
  constructor(private partidosService : PartidosService) { }

  getEquipos () : Observable<Equipo[]>{
        return of (equipos_data)
  }

  buscarEquipo(id : string): Equipo{
    let e : Equipo;
    for (let equipo of equipos_data){
      if(equipo.id == id){
        e = equipo
      }
    }
    return e!
  }

  buscarGoles (id : string){
    let goles : Gol[] = []
    let partidos : Partido[] = this.partidosService.partidosEquipo(id)
    for (let partido of partidos){
      for(let gol of partido.goles){
        if(gol.idParticipante == id){
          goles.push(gol)
        }
      }
    }
    return goles
  }

  buscarTarjetas (id: string){
    let tarjetas : Tarjeta[] = []
    let partidos : Partido[] = this.partidosService.partidosEquipo(id)
    for (let partido of partidos){
      for(let tarjeta of partido.tarjetas){
        if(tarjeta.idParticipante == id){
          tarjetas.push(tarjeta)
        }
      }
    }
    return tarjetas
  }
}
