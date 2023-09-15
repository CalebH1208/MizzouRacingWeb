import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowertrainComponent } from './powertrain.component';

describe('PowertrainComponent', () => {
  let component: PowertrainComponent;
  let fixture: ComponentFixture<PowertrainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PowertrainComponent]
    });
    fixture = TestBed.createComponent(PowertrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
