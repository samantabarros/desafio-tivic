import { TestBed } from '@angular/core/testing';

import { AdicionarOperacaoService } from './adicionar-operacao.service';

describe('AdicionarOperacaoService', () => {
  let service: AdicionarOperacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdicionarOperacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
