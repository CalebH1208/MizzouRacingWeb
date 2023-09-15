import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May2022Component } from './may2022.component';

describe('May2022Component', () => {
  let component: May2022Component;
  let fixture: ComponentFixture<May2022Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [May2022Component]
    });
    fixture = TestBed.createComponent(May2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
