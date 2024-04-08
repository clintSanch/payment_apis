import { TestBed } from '@angular/core/testing';

import { DarajaAuthService } from './daraja-auth.service';

describe('DarajaAuthService', () => {
  let service: DarajaAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarajaAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
