import { TestBed } from '@angular/core/testing';

import { AirtelDataService } from './airtel-data.service';

describe('AirtelDataService', () => {
  let service: AirtelDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirtelDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
