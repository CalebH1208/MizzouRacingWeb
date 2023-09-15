import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AerodynamicsComponent } from './aerodynamics.component';

describe('AerodynamicsComponent', () => {
  let component: AerodynamicsComponent;
  let fixture: ComponentFixture<AerodynamicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AerodynamicsComponent]
    });
    fixture = TestBed.createComponent(AerodynamicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
