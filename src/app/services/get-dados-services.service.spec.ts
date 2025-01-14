import { TestBed } from '@angular/core/testing';

import { GetDadosServicesService } from './get-dados-services.service';

describe('GetDadosServicesService', () => {
  let service: GetDadosServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDadosServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
