import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusFaturaChart } from './status-fatura-chart';

describe('StatusFaturaChart', () => {
  let component: StatusFaturaChart;
  let fixture: ComponentFixture<StatusFaturaChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusFaturaChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusFaturaChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
