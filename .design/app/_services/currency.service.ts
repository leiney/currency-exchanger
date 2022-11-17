import {Currency} from './../shared/_types/currency';
/**
 * @class CurrencyService
 * =====================================================================================
 * This is a currency listing service. It retrieves information on popular currencies.
 * Currencies are accessed using their ISO codes e.g. USD. Each currency object has a 
 * short name and a long name.  
 * =====================================================================================
 * @author Leiney Ogeto
 */
import {Currencies} from './../shared/_types/currencies';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
	
	/**
	 * @var currencies
	 * This is a key-value pair containing popular currencies for easy
	 * retrieval. To access object information about a particular currency,  
	 * access using currency code e.g. this.currencies.USD
	 */
	private currencies: Currencies = {
		USD: {shortName: 'U.S. Dollar', longName: 'United States Dollar'},
		EUR: {shortName: 'Euro', longName: 'European Euro'},
		GBP: {shortName: 'Sterling Pound', longName: 'British Sterling Pound'},
		AUD: {shortName: 'Australian Dollar', longName: 'Australian Dollar'},
		CHF: {shortName: 'Swiss Franc', longName: 'Swiss Franc'},
		JPY: {shortName: 'Yen', longName: 'Japanese Yen'},
		CNY: {shortName: 'Yuan', longName: 'Chinese Yuan'},
		CAD: {shortName: 'Canadian Dollar', longName: 'Canadian Dollar'},
		INR: {shortName: 'Rupee', longName: 'Indian Rupee'}
	};
	
  	constructor() { }
  	
  	/**
  	 * @method getCurrencies()
  	 * Expose the currencies variable as an observable. 
  	 * return array of currencies
  	 */
  	public getCurrencies(): Observable<any>{
  		let currencies: Currency[] = [];
  	
  		for(let c in this.currencies){
  			currencies.push(Object.assign(this.currencies[c],{code: c}));
  		}
  		
		return of(currencies);
	}
}
