import { TestBed } from '@angular/core/testing';

import { ApplyDenyShareService } from './apply-deny-share.service';

describe('ApplyDenyShareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplyDenyShareService = TestBed.get(ApplyDenyShareService);
    expect(service).toBeTruthy();
  });
});
