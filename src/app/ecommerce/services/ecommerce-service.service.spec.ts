import { TestBed, inject } from '@angular/core/testing';

import { EcommerceServiceService } from './ecommerce-service.service';

describe('EcommerceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EcommerceServiceService]
    });
  });

  it('should be created', inject([EcommerceServiceService], (service: EcommerceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
