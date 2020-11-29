import { TestBed } from '@angular/core/testing';

import { GradingHelperService } from './grading-helper.service';

describe('GradingHelperService', () => {
  let service: GradingHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradingHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
