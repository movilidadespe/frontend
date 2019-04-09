/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IntercambioAddComponent } from './intercambioAdd.component';

describe('IntercambioAddComponent', () => {
  let component: IntercambioAddComponent;
  let fixture: ComponentFixture<IntercambioAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntercambioAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntercambioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
