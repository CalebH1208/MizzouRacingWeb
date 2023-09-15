import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDynamicsComponent } from './vehicle-dynamics.component';

describe('VehicleDynamicsComponent', () => {
  let component: VehicleDynamicsComponent;
  let fixture: ComponentFixture<VehicleDynamicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleDynamicsComponent]
    });
    fixture = TestBed.createComponent(VehicleDynamicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
