import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoGolesComponent } from './equipo-goles.component';

describe('EquipoGolesComponent', () => {
  let component: EquipoGolesComponent;
  let fixture: ComponentFixture<EquipoGolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipoGolesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipoGolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
