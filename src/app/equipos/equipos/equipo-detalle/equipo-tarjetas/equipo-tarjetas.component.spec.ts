import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoTarjetasComponent } from './equipo-tarjetas.component';

describe('EquipoTarjetasComponent', () => {
  let component: EquipoTarjetasComponent;
  let fixture: ComponentFixture<EquipoTarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipoTarjetasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipoTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
