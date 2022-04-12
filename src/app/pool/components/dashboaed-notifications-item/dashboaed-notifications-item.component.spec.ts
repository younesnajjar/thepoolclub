import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboaedNotificationsItemComponent } from './dashboaed-notifications-item.component';

describe('DashboaedNotificationsItemComponent', () => {
  let component: DashboaedNotificationsItemComponent;
  let fixture: ComponentFixture<DashboaedNotificationsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboaedNotificationsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboaedNotificationsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
