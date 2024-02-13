import {Component} from '@angular/core';
import {equipos_data} from "../../../data/equipos";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Partido} from "../../../modelos/partido";
import {PartidosService} from "../../../servicios/partidos.service";
import {Router} from "@angular/router";
import {ValidacionEquipo} from "../ValidacionEquipo";

@Component({
  selector: 'app-new-partido',
  templateUrl: './new-partido.component.html',
  styleUrl: './new-partido.component.css'
})
export class NewPartidoComponent {

  protected readonly equipos_data = equipos_data;

  constructor(private service: PartidosService, private router : Router) {}

  formularioPartido = new FormGroup({
    local: new FormControl('--selecciona un equipo--', [ValidacionEquipo.equipoRequired]),
    visitante: new FormControl('--selecciona un equipo--', [ValidacionEquipo.equipoRequired]),
    date: new FormGroup('', [Validators.required]),
    time: new FormGroup('', [Validators.required])
  })

  submit() {
    if (this.formularioPartido.valid){
      let partido: Partido = {
        idLocal: this.formularioPartido.value.local!,
        idVisitante: this.formularioPartido.value.visitante!,
        fechaHora: this.formularioPartido.value.date!.toString() + " " + this.formularioPartido.value.time!.toString(),
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
}
