import { TestBed } from '@angular/core/testing';

import { IndexConseillerService } from './index-conseiller.service';

describe('IndexConseillerService', () => {
  let service: IndexConseillerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexConseillerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
