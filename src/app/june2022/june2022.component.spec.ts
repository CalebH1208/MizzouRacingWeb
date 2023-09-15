import { ComponentFixture, TestBed } from '@angular/core/testing';

import { June2022Component } from './june2022.component';

describe('June2022Component', () => {
  let component: June2022Component;
  let fixture: ComponentFixture<June2022Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [June2022Component]
    });
    fixture = TestBed.createComponent(June2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
