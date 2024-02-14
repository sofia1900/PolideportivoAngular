import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Partido} from "../../../modelos/partido";

@Component({
  selector: 'app-detail-partido',
  templateUrl: './detail-partido.component.html',
  styleUrl: './detail-partido.component.css'
})
export class DetailPartidoComponent implements OnInit{
  idPartido! : number;
  partido! : Partido;
  constructor(private route : ActivatedRoute) {}

  ngOnInit(){
    this.idPartido = this.route.snapshot.params['id'];
    this.partido =
  }



}
