import { TestBed, inject } from '@angular/core/testing';

import { TipomovService } from './tipomov.service';

describe('TipomovService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipomovService]
    });
  });

  it('should be created', inject([TipomovService], (service: TipomovService) => {
    expect(service).toBeTruthy();
  }));
});
