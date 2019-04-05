import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstanciaListComponent } from './estancia-list.component';

describe('EstanciaListComponent', () => {
  let component: EstanciaListComponent;
  let fixture: ComponentFixture<EstanciaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstanciaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstanciaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
