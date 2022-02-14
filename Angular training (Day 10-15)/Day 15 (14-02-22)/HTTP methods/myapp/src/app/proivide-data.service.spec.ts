import { TestBed } from '@angular/core/testing';

import { ProivideDataService } from './proivide-data.service';

describe('ProivideDataService', () => {
  let service: ProivideDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProivideDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
