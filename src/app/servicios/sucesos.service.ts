import {Injectable} from '@angular/core';
import {Suceso} from "../modelos/suceso";
import {partidos_data} from "../data/partidos.data";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SucesosService {

  sucesos: Suceso[] = []

  constructor() {}

  getSucesos() : Observable<Suceso[]>{
    for (let partido of partidos_data) {
      for (let gol of partido.goles) {
        let g = {
          fechaHora: gol.fechaHora,
          tipo: "GOL",
          equipo: gol.idParticipante,
          partido: partido.idLocal + " - " + partido.idVisitante
        }
        this.sucesos.push(g)
      }
      for (let tarjet of partido.tarjetas) {
        let t = {
          fechaHora: tarjet.fechaHora,
          tipo: "TARJETA " + tarjet.tipoTarjeta,
          equipo: tarjet.idParticipante,
          partido: partido.idLocal + " - " + partido.idVisitante
        }
        this.sucesos.push(t)
      }
    }
    return of(this.sucesos)
  }

}
