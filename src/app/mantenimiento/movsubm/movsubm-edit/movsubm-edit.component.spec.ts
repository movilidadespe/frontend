import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovsubmEditComponent } from './movsubm-edit.component';

describe('MovsubmEditComponent', () => {
  let component: MovsubmEditComponent;
  let fixture: ComponentFixture<MovsubmEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovsubmEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovsubmEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
