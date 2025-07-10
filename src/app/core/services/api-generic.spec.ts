import { TestBed } from '@angular/core/testing';

import { ApiGeneric } from './api-generic';

describe('ApiGeneric', () => {
  let service: ApiGeneric;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGeneric);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
