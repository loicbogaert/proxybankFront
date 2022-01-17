import { TestBed } from '@angular/core/testing';

import { IndexDirecteurService } from './index-directeur.service';

describe('IndexDirecteurService', () => {
  let service: IndexDirecteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexDirecteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
