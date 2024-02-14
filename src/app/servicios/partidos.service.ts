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

  getPartidoById(id : number): Partido {
    for (let partido of partidos_data){
      if (partido.id == id){
        return partido
      }
    }
  }
}
