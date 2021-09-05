import { TestBed } from '@angular/core/testing';

import { AreacodeService } from './areacode.service';

describe('AreacodeService', () => {
  let service: AreacodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreacodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
