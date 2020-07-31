import { TestBed } from '@angular/core/testing';

import { CovitechnionService } from './covitechnion.service';

describe('CovitechnionService', () => {
  let service: CovitechnionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovitechnionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
