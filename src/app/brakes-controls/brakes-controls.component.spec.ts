import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrakesControlsComponent } from './brakes-controls.component';

describe('BrakesControlsComponent', () => {
  let component: BrakesControlsComponent;
  let fixture: ComponentFixture<BrakesControlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrakesControlsComponent]
    });
    fixture = TestBed.createComponent(BrakesControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
