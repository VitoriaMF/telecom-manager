import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucaoMensalChart } from './evolucao-mensal-chart';

describe('EvolucaoMensalChart', () => {
  let component: EvolucaoMensalChart;
  let fixture: ComponentFixture<EvolucaoMensalChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvolucaoMensalChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvolucaoMensalChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
