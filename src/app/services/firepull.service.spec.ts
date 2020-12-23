import { TestBed } from '@angular/core/testing';

import { FirepullService } from './firepull.service';

describe('FirepullService', () => {
  let service: FirepullService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirepullService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
