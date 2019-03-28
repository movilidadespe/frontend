import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexadaComponent } from './indexada.component';

describe('IndexadaComponent', () => {
  let component: IndexadaComponent;
  let fixture: ComponentFixture<IndexadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
