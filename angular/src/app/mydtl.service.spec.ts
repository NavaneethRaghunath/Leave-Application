import { TestBed } from '@angular/core/testing';

import { MydtlService } from './mydtl.service';

describe('MydtlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MydtlService = TestBed.get(MydtlService);
    expect(service).toBeTruthy();
  });
});
