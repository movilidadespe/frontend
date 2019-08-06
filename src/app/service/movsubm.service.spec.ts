import { TestBed, inject } from '@angular/core/testing';

import { MovsubmService } from './movsubm.service';

describe('MovsubmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovsubmService]
    });
  });

  it('should be created', inject([MovsubmService], (service: MovsubmService) => {
    expect(service).toBeTruthy();
  }));
});
