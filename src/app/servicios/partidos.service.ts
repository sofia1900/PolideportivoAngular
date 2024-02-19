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

  eliminarPartido(id : number){
    for (let i = 0 ; i< partidos_data.length ; i++){
      if (partidos_data[i].id == id){
        partidos_data.slice(i,1)
        break
      }
    }
  }

  editPartido (partidoElegido : Partido){
    for (let i = 0 ; i< partidos_data.length ; i++){
      if (partidos_data[i].id == partidoElegido.id){
        partidos_data.slice(i,1)
        break
      }
    }
    partidos_data.push(partidoElegido)
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
