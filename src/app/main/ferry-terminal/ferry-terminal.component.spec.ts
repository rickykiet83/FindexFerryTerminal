import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerryTerminalComponent } from './ferry-terminal.component';

describe('FerryTerminalComponent', () => {
  let component: FerryTerminalComponent;
  let fixture: ComponentFixture<FerryTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FerryTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FerryTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
