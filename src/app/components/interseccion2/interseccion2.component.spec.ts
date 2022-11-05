import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interseccion2Component } from './interseccion2.component';

describe('Interseccion2Component', () => {
  let component: Interseccion2Component;
  let fixture: ComponentFixture<Interseccion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interseccion2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interseccion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
