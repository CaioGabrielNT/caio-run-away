import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moda } from './moda';

describe('Moda', () => {
  let component: Moda;
  let fixture: ComponentFixture<Moda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moda],
    }).compileComponents();

    fixture = TestBed.createComponent(Moda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
