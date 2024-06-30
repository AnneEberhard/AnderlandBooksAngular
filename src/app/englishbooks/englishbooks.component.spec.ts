import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishbooksComponent } from './englishbooks.component';

describe('EnglishbooksComponent', () => {
  let component: EnglishbooksComponent;
  let fixture: ComponentFixture<EnglishbooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnglishbooksComponent]
    });
    fixture = TestBed.createComponent(EnglishbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
