import { TestBed } from '@angular/core/testing';

import { PendingLeaveService } from './pending-leave.service';

describe('PendingLeaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PendingLeaveService = TestBed.get(PendingLeaveService);
    expect(service).toBeTruthy();
  });
});
