import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoriaViewComponent } from './convocatoria-view.component';

describe('ConvocatoriaViewComponent', () => {
  let component: ConvocatoriaViewComponent;
  let fixture: ComponentFixture<ConvocatoriaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvocatoriaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocatoriaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
