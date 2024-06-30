import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreeNanComponent } from './bree-nan.component';

describe('BreeNanComponent', () => {
  let component: BreeNanComponent;
  let fixture: ComponentFixture<BreeNanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreeNanComponent]
    });
    fixture = TestBed.createComponent(BreeNanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
