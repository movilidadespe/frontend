import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvoEditComponent } from './convo-edit.component';

describe('ConvoEditComponent', () => {
  let component: ConvoEditComponent;
  let fixture: ComponentFixture<ConvoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
