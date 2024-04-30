import { TestBed } from '@angular/core/testing';

import { AccesoDatosService } from './acceso-datos.service';

describe('AccesoDatosService', () => {
  let service: AccesoDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccesoDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
