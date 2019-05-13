import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipomovilidadAddComponent } from './tipomovilidad-add.component';

describe('TipomovilidadAddComponent', () => {
  let component: TipomovilidadAddComponent;
  let fixture: ComponentFixture<TipomovilidadAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipomovilidadAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipomovilidadAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
