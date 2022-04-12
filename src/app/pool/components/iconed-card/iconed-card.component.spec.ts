import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconedCardComponent } from './iconed-card.component';

describe('IconedCardComponent', () => {
  let component: IconedCardComponent;
  let fixture: ComponentFixture<IconedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
