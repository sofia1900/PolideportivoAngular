import { TestBed } from '@angular/core/testing';

import { SucesosService } from './sucesos.service';

describe('SucesosService', () => {
  let service: SucesosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SucesosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
