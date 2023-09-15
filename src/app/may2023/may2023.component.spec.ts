import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May2023Component } from './may2023.component';

describe('May2023Component', () => {
  let component: May2023Component;
  let fixture: ComponentFixture<May2023Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [May2023Component]
    });
    fixture = TestBed.createComponent(May2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
