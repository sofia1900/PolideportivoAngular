import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoPartidosComponent } from './equipo-partidos.component';

describe('EquipoPartidosComponent', () => {
  let component: EquipoPartidosComponent;
  let fixture: ComponentFixture<EquipoPartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipoPartidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipoPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
