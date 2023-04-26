import { TestBed } from '@angular/core/testing';

import { ApartmentvillasService } from './apartmentvillas.service';

describe('ApartmentvillasService', () => {
  let service: ApartmentvillasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApartmentvillasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
