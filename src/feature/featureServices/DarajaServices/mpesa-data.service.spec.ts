import { TestBed } from '@angular/core/testing';

import { MpesaDataService } from './mpesa-data.service';

describe('MpesaDataService', () => {
  let service: MpesaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MpesaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
