import { TestBed } from '@angular/core/testing';

import { ApplyleaveService } from './applyleave.service';

describe('ApplyleaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplyleaveService = TestBed.get(ApplyleaveService);
    expect(service).toBeTruthy();
  });
});
