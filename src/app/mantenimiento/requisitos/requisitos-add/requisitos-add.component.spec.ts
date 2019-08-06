import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitosAddComponent } from './requisitos-add.component';

describe('RequisitosAddComponent', () => {
  let component: RequisitosAddComponent;
  let fixture: ComponentFixture<RequisitosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitosAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
