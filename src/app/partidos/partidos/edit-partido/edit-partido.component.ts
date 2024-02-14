import {Component, OnInit} from '@angular/core';
import {PartidosService} from "../../../servicios/partidos.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidacionEquipo} from "../ValidacionEquipo";
import {Partido} from "../../../modelos/partido";
import {equipos_data} from "../../../data/equipos";

@Component({
  selector: 'app-edit-partido',
  templateUrl: './edit-partido.component.html',
  styleUrl: './edit-partido.component.css'
})
export class EditPartidoComponent implements OnInit {

  idPartido! : number;
  partido! : Partido;

  formularioPartido! : FormGroup<{local: FormControl<string | null>, visitante: FormControl<string | null>, date: FormGroup<string>, time: FormGroup<string>}>


  constructor(private service: PartidosService, private router : Router, private route : ActivatedRoute) {}

  ngOnInit(){
    this.idPartido = this.route.snapshot.params['id'];
    this.partido = this.service.getPartidoById(this.idPartido);

    this.formularioPartido = new FormGroup({
      local: new FormControl(this.partido.idLocal , [ValidacionEquipo.equipoRequired]),
      visitante: new FormControl(this.partido.idVisitante, [ValidacionEquipo.equipoRequired]),
      date: new FormGroup('', [Validators.required]),
      time: new FormGroup('', [Validators.required])
    })
  }

  submit() {
    if (this.formularioPartido.valid){
      let partido: Partido = {
        id : this.partido.id,
        idLocal: this.formularioPartido.value.local!,
        idVisitante: this.formularioPartido.value.visitante!,
        fechaHora: this.formularioPartido.value.date!.toString() + " " + this.formularioPartido.value.time!.toString(),
        goles: this.partido.goles,
        tarjetas: this.partido.tarjetas
      }
      this.service.editPartido(partido)
      this.volver()
    }
  }

  volver () {
    this.router.navigate(['/partidos/detail/', this.idPartido])
  }

  protected readonly equipos_data = equipos_data;
}
