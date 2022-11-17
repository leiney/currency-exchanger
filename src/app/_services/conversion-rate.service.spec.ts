import { TestBed } from '@angular/core/testing';

import { ConversionRateService } from './conversion-rate.service';

describe('ConversionRateService', () => {
  let service: ConversionRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversionRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('#getRate() should return a number greater than zero', (done) => {
	service.getRate('EUR','USD').subscribe(data => {	
		expect(typeof data === 'number').toBeTruthy();
		expect(data>0).toBeTruthy();
		done();
	});
  });
  
});
