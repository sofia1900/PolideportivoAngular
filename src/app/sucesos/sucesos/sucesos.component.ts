import {Component, OnInit} from '@angular/core';
import {Suceso} from "../../modelos/suceso";
import {SucesosService} from "../../servicios/sucesos.service";

@Component({
  selector: 'app-sucesos',
  templateUrl: './sucesos.component.html',
  styleUrl: './sucesos.component.css'
})
export class SucesosComponent implements OnInit {

  sucesos!: Suceso[]

  constructor(private sucesosService: SucesosService) {}

  ngOnInit() {
    this.sucesosService.getSucesos().subscribe(s =>
      this.sucesos = s)
  }

}
