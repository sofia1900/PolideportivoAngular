import {Component, OnInit} from '@angular/core';
import {equipos_data} from "../../../data/equipos";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Partido} from "../../../modelos/partido";
import {PartidosService} from "../../../servicios/partidos.service";
import {Router} from "@angular/router";
import {ValidacionEquipo} from "../ValidacionEquipo";
import moment from "moment";

@Component({
  selector: 'app-new-partido',
  templateUrl: './new-partido.component.html',
  styleUrl: './new-partido.component.css'
})
export class NewPartidoComponent implements OnInit {

  protected readonly equipos_data = equipos_data;
  formularioPartido : any;
  constructor(private service: PartidosService, private router : Router, private fb : FormBuilder) {}

  ngOnInit(){
    this.formularioPartido = this.fb.group({
      local: ['--selecciona un equipo--', [ValidacionEquipo.equipoRequired]],
      visitante: ['--selecciona un equipo--', [ValidacionEquipo.equipoRequired]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]]
    })
  }

  submit() {
    if (this.formularioPartido.valid && this.valEquiposDistintos()){
      const fechaHoraCompleta = new Date();
      const timeMs = fechaHoraCompleta.getTime();
      const fecha = moment(this.formularioPartido.get('date').value).format('DD/MM/YYYY');
      const hora = this.formularioPartido.get('time').value.toString()
      let partido: Partido = {
        id : timeMs,
        idLocal: this.formularioPartido.get("local").value,
        idVisitante: this.formularioPartido.get("visitante").value,
        fechaHora: fecha.toString() + " " + hora,
        goles: [],
        tarjetas: []
      }
      this.service.newPartido(partido)
      this.volver()
    }
  }

  volver () {
    this.router.navigate(['/partidos'])
  }

  valEquiposDistintos(){
    const equipo1 = this.formularioPartido.get("local").value
    const equipo2 = this.formularioPartido.get("visitante").value
    return equipo1 != equipo2
  }
}
