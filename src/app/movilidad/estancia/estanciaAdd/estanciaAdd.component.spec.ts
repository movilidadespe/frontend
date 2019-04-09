/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EstanciaAddComponent } from './estanciaAdd.component';

describe('EstanciaAddComponent', () => {
  let component: EstanciaAddComponent;
  let fixture: ComponentFixture<EstanciaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstanciaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstanciaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
