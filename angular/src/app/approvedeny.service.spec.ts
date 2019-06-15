import { TestBed } from '@angular/core/testing';

import { ApprovedenyService } from './approvedeny.service';

describe('ApprovedenyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApprovedenyService = TestBed.get(ApprovedenyService);
    expect(service).toBeTruthy();
  });
});
