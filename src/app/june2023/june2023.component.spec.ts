import { ComponentFixture, TestBed } from '@angular/core/testing';

import { June2023Component } from './june2023.component';

describe('June2023Component', () => {
  let component: June2023Component;
  let fixture: ComponentFixture<June2023Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [June2023Component]
    });
    fixture = TestBed.createComponent(June2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
