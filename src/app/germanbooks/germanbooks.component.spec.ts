import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanbooksComponent } from './germanbooks.component';

describe('GermanbooksComponent', () => {
  let component: GermanbooksComponent;
  let fixture: ComponentFixture<GermanbooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GermanbooksComponent]
    });
    fixture = TestBed.createComponent(GermanbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
