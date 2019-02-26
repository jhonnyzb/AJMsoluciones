import { TestBed } from '@angular/core/testing';

import { SPaginicioService } from './s-paginicio.service';

describe('SPaginicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SPaginicioService = TestBed.get(SPaginicioService);
    expect(service).toBeTruthy();
  });
});
