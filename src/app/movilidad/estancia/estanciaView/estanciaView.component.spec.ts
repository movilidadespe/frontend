/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EstanciaViewComponent } from './estanciaView.component';

describe('EstanciaViewComponent', () => {
  let component: EstanciaViewComponent;
  let fixture: ComponentFixture<EstanciaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstanciaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstanciaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
