import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrensbooksComponent } from './childrensbooks.component';

describe('ChildrensbooksComponent', () => {
  let component: ChildrensbooksComponent;
  let fixture: ComponentFixture<ChildrensbooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildrensbooksComponent]
    });
    fixture = TestBed.createComponent(ChildrensbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
