/**
 * @class ConversionRateService
 * =====================================================================================
 * This is a currency conversion service. It retrieves conversion rates for different 
 * currencies using combination of ISO codes e.g. EURO-USD. It implements a method that
 * accepts two currency codes and an amount as arguments and performs the conversion 
 * =====================================================================================
 * @author Leiney Ogeto
 */
 import { Injectable } from '@angular/core';
 import { concat, of, Observable } from 'rxjs';
 import {ConversionRate} from './../_models/conversion-rate';

@Injectable({
  providedIn: 'root'
})
export class ConversionRateService {

	/**
	 * @var rates
	 * This is a multidimensional object array for different currency conversions.
	 * each object must have keys i.e. sourceCurrency, destinationCurrency and rate.
	 * each sourceCurrency or destinationCurrency respresents the currency ISO code
	 */
	private rates: ConversionRate[] = [
		{ sourceCurrency: 'EUR', destinationCurrency: 'USD', rate: 1.04 },
		{ sourceCurrency: 'EUR', destinationCurrency: 'GBP', rate: 0.87 },
		{ sourceCurrency: 'EUR', destinationCurrency: 'CHF', rate: 0.98 },
		{ sourceCurrency: 'USD', destinationCurrency: 'GBP', rate: 0.84 },
		{ sourceCurrency: 'USD', destinationCurrency: 'JPY', rate: 139.12 },
		{ sourceCurrency: 'USD', destinationCurrency: 'INR', rate: 81.48 },
		{ sourceCurrency: 'USD', destinationCurrency: 'CAD', rate: 1.33 },
	];
	
  	constructor() { }
  	
  	/**
  	 * @param sourceCurrency
  	 * @param destinationCurrency
  	 * @method getRate()
  	 * Get rate equivalent for the second currency code i.e. destinationCurrency 
  	 */
  	public getRate(sourceCurrency: string, destinationCurrency: string): Observable<number>{
  		let currency: any = this.rates.find((a:ConversionRate) => (
			a.sourceCurrency==sourceCurrency && a.destinationCurrency==destinationCurrency
  		));
		return of(currency.rate);
	}
}
