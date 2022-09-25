import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesnewComponent } from './gamesnew.component';

describe('GamesnewComponent', () => {
  let component: GamesnewComponent;
  let fixture: ComponentFixture<GamesnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
