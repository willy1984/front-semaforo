import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interseccion3Component } from './interseccion3.component';

describe('Interseccion3Component', () => {
  let component: Interseccion3Component;
  let fixture: ComponentFixture<Interseccion3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interseccion3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interseccion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
