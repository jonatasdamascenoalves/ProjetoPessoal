import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancieComponent } from './financie.component';

describe('FinancieComponent', () => {
  let component: FinancieComponent;
  let fixture: ComponentFixture<FinancieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
