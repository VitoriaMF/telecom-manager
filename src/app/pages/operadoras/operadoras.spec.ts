import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Operadoras } from './operadoras';

describe('Operadoras', () => {
  let component: Operadoras;
  let fixture: ComponentFixture<Operadoras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Operadoras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Operadoras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
