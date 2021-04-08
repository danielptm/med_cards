import { TestBed } from '@angular/core/testing';

import { FhirhttpService } from './fhirhttp.service';

describe('FhirhttpService', () => {
  let service: FhirhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FhirhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
