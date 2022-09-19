import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesdealComponent } from './gamesdeal.component';

describe('GamesdealComponent', () => {
  let component: GamesdealComponent;
  let fixture: ComponentFixture<GamesdealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesdealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesdealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
