import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstanciaCreateComponent } from './estancia-create.component';

describe('EstanciaCreateComponent', () => {
  let component: EstanciaCreateComponent;
  let fixture: ComponentFixture<EstanciaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstanciaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstanciaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
