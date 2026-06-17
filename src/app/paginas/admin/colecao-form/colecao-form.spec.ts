import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecaoForm } from './colecao-form';

describe('ColecaoForm', () => {
  let component: ColecaoForm;
  let fixture: ComponentFixture<ColecaoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColecaoForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ColecaoForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
