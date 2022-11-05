import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interseccion1Component } from './interseccion1.component';

describe('Interseccion1Component', () => {
  let component: Interseccion1Component;
  let fixture: ComponentFixture<Interseccion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interseccion1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interseccion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
