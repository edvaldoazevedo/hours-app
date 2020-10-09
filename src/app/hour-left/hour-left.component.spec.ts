import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourLeftComponent } from './hour-left.component';

describe('HourLeftComponent', () => {
  let component: HourLeftComponent;
  let fixture: ComponentFixture<HourLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
