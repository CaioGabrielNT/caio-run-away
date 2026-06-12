import { TestBed } from '@angular/core/testing';

import { Outh } from './outh';

describe('Outh', () => {
  let service: Outh;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Outh);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
