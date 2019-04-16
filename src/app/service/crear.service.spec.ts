import { TestBed, inject } from '@angular/core/testing';

import { CrearService } from './crear.service';

describe('CrearService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearService]
    });
  });

  it('should be created', inject([CrearService], (service: CrearService) => {
    expect(service).toBeTruthy();
  }));
});
