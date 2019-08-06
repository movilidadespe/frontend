import { TestBed, inject } from '@angular/core/testing';

import { ConsumirMovilidadService } from './consumir-movilidad.service';

describe('ConsumirMovilidadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsumirMovilidadService]
    });
  });

  it('should be created', inject([ConsumirMovilidadService], (service: ConsumirMovilidadService) => {
    expect(service).toBeTruthy();
  }));
});
