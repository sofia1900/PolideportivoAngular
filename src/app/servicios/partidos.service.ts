import { Injectable } from '@angular/core';
import {partidos_data} from "../data/partidos.data";
import {Partido} from "../modelos/partido";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PartidosService {
  constructor() { }

  getPartidos () : Observable<Partido[]> {
    return of(partidos_data)
  }

  newPartido (partido : Partido) {
    partidos_data.push(partido)
  }

  getPartidoById(id : number) : Partido {
    let partidoElegido : Partido
    for (let partido of partidos_data){
      if (partido.id == id){
        partidoElegido = partido
        break
      }
    }
    return partidoElegido!
  }

  editPartido (partidoElegido : Partido){
    for (let partido of partidos_data){
      if (partido.id == partidoElegido.id){
        partido = partidoElegido
        break
      }
    }
  }

  contarPartidos(equipo : string){
    let numPartidos = 0;
    for (let partido of partidos_data){
      if (partido.idLocal == equipo || partido.idVisitante == equipo){
        numPartidos ++;
      }
    }
    return numPartidos;
  }

  partidosEquipo (equipo : string) {
    let partidos : Partido[] = []
    for (let partido of partidos_data){
      if (partido.idLocal == equipo || partido.idVisitante == equipo){
        partidos.push(partido)
      }
    }
    return partidos;
  }
}
