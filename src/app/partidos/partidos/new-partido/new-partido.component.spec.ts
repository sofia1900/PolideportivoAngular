import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPartidoComponent } from './new-partido.component';

describe('NewPartidoComponent', () => {
  let component: NewPartidoComponent;
  let fixture: ComponentFixture<NewPartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewPartidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
