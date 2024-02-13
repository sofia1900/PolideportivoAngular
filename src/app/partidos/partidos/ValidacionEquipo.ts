import {AbstractControl, ValidationErrors} from "@angular/forms";

export class ValidacionEquipo {
  static equipoRequired (control: AbstractControl): ValidationErrors | null {
    let equipo = control.value
    if (equipo == "--selecciona un equipo--") {
      return {equipoRequired: true}
    } else {
      return null
    }
  }
}
