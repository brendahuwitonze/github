import { TestBed } from '@angular/core/testing';

import { GitinfoRequestService } from './gitinfo-request.service';

describe('GitinfoRequestService', () => {
  let service: GitinfoRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitinfoRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
