import { TestBed } from '@angular/core/testing';

import { MissionsServicesService } from './missions-services.service';

describe('MissionsServicesService', () => {
  let service: MissionsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissionsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
