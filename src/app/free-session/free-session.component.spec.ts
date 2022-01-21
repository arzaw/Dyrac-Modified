import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeSessionComponent } from './free-session.component';

describe('FreeSessionComponent', () => {
  let component: FreeSessionComponent;
  let fixture: ComponentFixture<FreeSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
