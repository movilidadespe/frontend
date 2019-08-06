/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsumirMantenimientoService } from './consumir-mantenimiento.service';

describe('Service: ConsumirMantenimiento', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsumirMantenimientoService]
    });
  });

  it('should ...', inject([ConsumirMantenimientoService], (service: ConsumirMantenimientoService) => {
    expect(service).toBeTruthy();
  }));
});
