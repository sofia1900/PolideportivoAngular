import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoListaComponent } from './partido-lista.component';

describe('PartidoListaComponent', () => {
  let component: PartidoListaComponent;
  let fixture: ComponentFixture<PartidoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartidoListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartidoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
