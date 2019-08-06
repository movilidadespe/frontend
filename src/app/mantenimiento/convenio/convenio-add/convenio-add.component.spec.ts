import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenioAddComponent } from './convenio-add.component';

describe('ConvenioAddComponent', () => {
  let component: ConvenioAddComponent;
  let fixture: ComponentFixture<ConvenioAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvenioAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvenioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
