/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndexadaAddComponent } from './indexadaAdd.component';

describe('IndexadaAddComponent', () => {
  let component: IndexadaAddComponent;
  let fixture: ComponentFixture<IndexadaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexadaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexadaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
