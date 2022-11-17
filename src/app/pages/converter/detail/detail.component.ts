import {ConversionRate} from './../../../_models/conversion-rate';
import {Currency} from './../../../shared/_types/currency';
import {CurrencyService} from './../../../_services/currency.service';
import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
	title: Currency;

	@Input() conversionRate: ConversionRate = {
		amount: 0,
		sourceCurrency: 'EUR',
		destinationCurrency: 'USD'
	};
	
	constructor(
			public route: ActivatedRoute, 
			public currencyService: CurrencyService) { }

	ngOnInit(): void {
		this.route.queryParams.subscribe((params: any) => { 
			this.onGetCurrency(params);
		});
	}
	
	onGetCurrency(params: any){
		this.currencyService.getCurrency(params.source).subscribe(data=>{
			this.title = Object.assign(data,{code: params.source});
			this.conversionRate.amount = params.amount || 0;				
			this.conversionRate.sourceCurrency = params.source || '';
			this.conversionRate.destinationCurrency = params.destination || '';
		});
	}
	
	onDrawCurrencyChart(conversionRate?: any){ 
		this.conversionRate = Object.assign(this.conversionRate,(conversionRate || {}));
	}
}
