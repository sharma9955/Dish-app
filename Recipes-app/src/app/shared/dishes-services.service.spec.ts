import { TestBed } from '@angular/core/testing';

import { DishesServicesService } from './dishes-services.service';

describe('DishesServicesService', () => {
  let service: DishesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
