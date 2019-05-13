import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipomovilidadEditComponent } from './tipomovilidad-edit.component';

describe('TipomovilidadEditComponent', () => {
  let component: TipomovilidadEditComponent;
  let fixture: ComponentFixture<TipomovilidadEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipomovilidadEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipomovilidadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
