import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionOverviewComponent } from './competition-overview.component';

describe('CompetitionOverviewComponent', () => {
  let component: CompetitionOverviewComponent;
  let fixture: ComponentFixture<CompetitionOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetitionOverviewComponent]
    });
    fixture = TestBed.createComponent(CompetitionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
