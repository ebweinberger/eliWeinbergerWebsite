import { TestBed } from '@angular/core/testing';

import { GetmdService } from './getmd.service';

describe('GetmdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetmdService = TestBed.get(GetmdService);
    expect(service).toBeTruthy();
  });
});
