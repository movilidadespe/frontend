/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GestionInvestigacionViewComponent } from './gestionInvestigacionView.component';

describe('GestionInvestigacionViewComponent', () => {
  let component: GestionInvestigacionViewComponent;
  let fixture: ComponentFixture<GestionInvestigacionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionInvestigacionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionInvestigacionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
