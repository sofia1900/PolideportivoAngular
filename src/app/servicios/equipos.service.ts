import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Equipo} from "../modelos/equipo";
import {equipos_data} from "../data/equipos";

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  constructor() { }

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
}
