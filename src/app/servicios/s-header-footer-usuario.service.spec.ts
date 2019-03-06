import { TestBed } from '@angular/core/testing';

import { SHeaderFooterUsuarioService } from './s-header-footer-usuario.service';

describe('SHeaderFooterUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SHeaderFooterUsuarioService = TestBed.get(SHeaderFooterUsuarioService);
    expect(service).toBeTruthy();
  });
});
