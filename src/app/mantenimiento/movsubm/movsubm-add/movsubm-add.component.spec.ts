import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovsubmAddComponent } from './movsubm-add.component';

describe('MovsubmAddComponent', () => {
  let component: MovsubmAddComponent;
  let fixture: ComponentFixture<MovsubmAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovsubmAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovsubmAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
