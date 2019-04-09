import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoriaCreateComponent } from './convocatoria-create.component';

describe('ConvocatoriaCreateComponent', () => {
  let component: ConvocatoriaCreateComponent;
  let fixture: ComponentFixture<ConvocatoriaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvocatoriaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocatoriaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
