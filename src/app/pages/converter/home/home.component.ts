/**
 * @class HomeComponent
 * =====================================================================================
 * This component displays the converter panel and 3 X 3 grid with conversions
 * of different currencies. When a value changes in the converter panel the
 * 3 X 3 grid updates itself
 * =====================================================================================
 * @author Leiney Ogeto
 */
 
import {ConversionRate} from './../../../_models/conversion-rate';
import {CurrencyService} from './../../../_services/currency.service';
import {ConversionRateService} from './../../../_services/conversion-rate.service';
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	title: string = 'Currency Exchanger';

	@Input() conversionRate: ConversionRate = {
		amount: 1,
		sourceCurrency: 'EUR',
		destinationCurrency: 'USD'
	}; 
	
	conversions: ConversionRate[] = []; 
	
	constructor(
			public rateService: ConversionRateService,
			public currencyService: CurrencyService) { 
		
	}

	ngOnInit(): void {
		this.onManyConversions();
	}
	
	
	/**
	 * @method onSingleConversion
	 * This method performs a single conversion based on supplied coversion rate object 
	 * @param conversion rate
	 */
	onSingleConversion(conversionRate: ConversionRate)
	{
		let a: string = this.conversionRate.sourceCurrency || '';
		let b: string = conversionRate.destinationCurrency || '';
	
		if(a==b) return;
	
		this.rateService.getRate(a,b).subscribe((rate:number)=>{
			let converted: any = Number(conversionRate.amount)*rate;			
			let c: ConversionRate = Object.assign({},conversionRate,{rate: rate, converted: converted});
			this.conversions.push(c);
		});
	}
	
	/**
	 * @method onManyConversions()
	 * This method perfroms multiple conversions by obtaining to popular
	 * currencies from the currency listing service
	 */
	onManyConversions(){
		this.currencyService.getCurrencies().subscribe(currencies=>{
			for(let c of currencies){
				
				if(this.conversions.length==6) break;
					
				let rate: ConversionRate = Object.assign({},this.conversionRate,{
					destinationCurrency: c.code
				});
			
				this.onSingleConversion(rate);	
			}
		});
	}
	
	ngOnChanges(c: SimpleChanges) {    	
		this.onManyConversions();
    }

}
