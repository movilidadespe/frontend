/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExternosComponent } from './externos.component';

describe('ExternosComponent', () => {
  let component: ExternosComponent;
  let fixture: ComponentFixture<ExternosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
