/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MovsubmComponent } from './movsubm.component';

describe('MovsubmComponent', () => {
  let component: MovsubmComponent;
  let fixture: ComponentFixture<MovsubmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovsubmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovsubmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
