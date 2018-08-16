import { TestBed, inject } from '@angular/core/testing';

import { StoredataService } from './storedata.service';

describe('StoredataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoredataService]
    });
  });

  it('should be created', inject([StoredataService], (service: StoredataService) => {
    expect(service).toBeTruthy();
  }));
});
