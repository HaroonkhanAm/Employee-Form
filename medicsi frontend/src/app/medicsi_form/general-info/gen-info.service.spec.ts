import { TestBed } from '@angular/core/testing';

import { GenInfoService } from './gen-info.service';

describe('GenInfoService', () => {
  let service: GenInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
