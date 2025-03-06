import { TestBed } from '@angular/core/testing';

import { ShortlinkResolverService } from './shortlink-resolver.service';

describe('ShortlinkResolverService', () => {
  let service: ShortlinkResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortlinkResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
