import { TestBed } from '@angular/core/testing';

import { MgrdtlService } from './mgrdtl.service';

describe('MgrdtlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MgrdtlService = TestBed.get(MgrdtlService);
    expect(service).toBeTruthy();
  });
});
