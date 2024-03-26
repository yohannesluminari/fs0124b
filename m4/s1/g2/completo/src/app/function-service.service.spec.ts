import { TestBed } from '@angular/core/testing';

import { FunctionServiceService } from './function-service.service';

describe('FunctionServiceService', () => {
  let service: FunctionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
