import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanmovEditComponent } from './planmov-edit.component';

describe('PlanmovEditComponent', () => {
  let component: PlanmovEditComponent;
  let fixture: ComponentFixture<PlanmovEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanmovEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanmovEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
