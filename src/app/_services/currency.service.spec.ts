import {Currency} from './../shared/_types/currency';
import {Currencies} from './../shared/_types/currencies';
import { TestBed } from '@angular/core/testing';

import { CurrencyService } from './currency.service';

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('#getCurrencies() should return a Currency object', (done) => {
	service.getCurrencies().subscribe(data => {		
				
		for(let key in data){
			expect(typeof key === 'string').toBeTruthy();
			expect(data[key].shortName && data[key].longName).toBeTruthy();
		}
		
		done();
	});
  });
  
});
