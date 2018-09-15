import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdeComponent } from './sde.component';

describe('SdeComponent', () => {
  let component: SdeComponent;
  let fixture: ComponentFixture<SdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
