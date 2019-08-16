import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBagComponent } from './list-bag.component';

describe('ListBagComponent', () => {
  let component: ListBagComponent;
  let fixture: ComponentFixture<ListBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
