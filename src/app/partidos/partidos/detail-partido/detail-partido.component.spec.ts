import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPartidoComponent } from './detail-partido.component';

describe('DetailPartidoComponent', () => {
  let component: DetailPartidoComponent;
  let fixture: ComponentFixture<DetailPartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailPartidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
