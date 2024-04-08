import { TestBed } from '@angular/core/testing';

import { AirtelAuthService } from './airtel-auth.service';

describe('AirtelAuthService', () => {
  let service: AirtelAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirtelAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
