export interface Partido {
  id : number
  idLocal : string,
  idVisitante : string,
  fechaHora : string,
  goles : Gol[],
  tarjetas : Tarjeta[]
}

export interface Gol {
  idParticipante : string,
  fechaHora : string
}

export interface Tarjeta {
  idParticipante : string,
  tipoTarjeta : string
  fechaHora : string
}
