import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingLeaveApplicationComponent } from './pending-leave-application.component';

describe('PendingLeaveApplicationComponent', () => {
  let component: PendingLeaveApplicationComponent;
  let fixture: ComponentFixture<PendingLeaveApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingLeaveApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingLeaveApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
