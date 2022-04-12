import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboaedNotificationsComponent } from './dashboaed-notifications.component';

describe('DashboaedNotificationsComponent', () => {
  let component: DashboaedNotificationsComponent;
  let fixture: ComponentFixture<DashboaedNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboaedNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboaedNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
