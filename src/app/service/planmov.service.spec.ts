import { TestBed, inject } from '@angular/core/testing';

import { PlanmovService } from './planmov.service';

describe('PlanmovService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanmovService]
    });
  });

  it('should be created', inject([PlanmovService], (service: PlanmovService) => {
    expect(service).toBeTruthy();
  }));
});
