import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToBagComponent } from './add-to-bag.component';

describe('AddToBagComponent', () => {
  let component: AddToBagComponent;
  let fixture: ComponentFixture<AddToBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToBagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
