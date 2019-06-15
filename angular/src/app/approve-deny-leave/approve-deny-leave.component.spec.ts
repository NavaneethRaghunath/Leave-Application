import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveDenyLeaveComponent } from './approve-deny-leave.component';

describe('ApproveDenyLeaveComponent', () => {
  let component: ApproveDenyLeaveComponent;
  let fixture: ComponentFixture<ApproveDenyLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveDenyLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveDenyLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
