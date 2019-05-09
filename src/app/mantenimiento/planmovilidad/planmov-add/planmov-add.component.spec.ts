import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanmovAddComponent } from './planmov-add.component';

describe('PlanmovAddComponent', () => {
  let component: PlanmovAddComponent;
  let fixture: ComponentFixture<PlanmovAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanmovAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanmovAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
