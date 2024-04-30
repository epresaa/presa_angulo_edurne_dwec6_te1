import { TestBed } from '@angular/core/testing';

import { ConsultasApiService } from './consultas-api.service';

describe('ConsultasApiService', () => {
  let service: ConsultasApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultasApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
