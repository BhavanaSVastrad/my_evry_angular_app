import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToymartComponent } from './toymart.component';

describe('ToymartComponent', () => {
  let component: ToymartComponent;
  let fixture: ComponentFixture<ToymartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToymartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToymartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
