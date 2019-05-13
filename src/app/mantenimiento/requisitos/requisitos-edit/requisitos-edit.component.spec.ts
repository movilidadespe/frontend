import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitosEditComponent } from './requisitos-edit.component';

describe('RequisitosEditComponent', () => {
  let component: RequisitosEditComponent;
  let fixture: ComponentFixture<RequisitosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitosEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
