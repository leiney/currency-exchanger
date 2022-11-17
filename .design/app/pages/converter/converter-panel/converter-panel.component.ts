import {ElementSelectionService} from './../../../element-selection.service';
import {ComponentInspectorService} from './../../../component-inspector.service';
/**
 * @class ConverterPanelComponent
 * =====================================================================================
 * This is the converter panel component class that accesses the exchange rates
 * and performs currency conversion for different currencies.
 * =====================================================================================
 * @author Leiney Ogeto
 */

import {ConversionRate} from './../../../_models/conversion-rate';
import {ConversionRateService} from './../../../_services/conversion-rate.service';
import {CurrencyService} from './../../../_services/currency.service';
import {Currencies} from './../../../shared/_types/currencies';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'converter-panel',
  templateUrl: './converter-panel.component.html',
  styleUrls: ['./converter-panel.component.css']
})
export class ConverterPanelComponent implements OnInit {
	@Input() conversionRate: ConversionRate; 
	
	/* converter form object goes here */
	form: FormGroup;

	/* stores the object of currencies */
	currencies: Currencies[] = [];

	constructor(public __elementSelectionService:ElementSelectionService, private __componentInspectorService:ComponentInspectorService,

			public formBuilder: FormBuilder,
			public currencyService: CurrencyService,
			public rateService: ConversionRateService) {this.__componentInspectorService.getComp(this);
 
		
	}

	/**
	 * @method ngOnInit()
	 * This method initializes the converter panel form with inputs for amount,
	 * sourceCurrency and destinationCurrency. It also loads currencies from an
	 * observable.
	 */
	ngOnInit(): void {

		this.form = this.formBuilder.group({
			sourceCurrency: ['', Validators.required],
	    	destinationCurrency: ['', Validators.required],
	        amount: [null,[Validators.required]],
	        rate: [null],
	        converted: [null]
	    });
		
		/**
		 * populate form with default values 
		 */
		 this.form.patchValue(this.conversionRate);
		 
		
		/**
		 * fetch currencies from service and populate here on a successful call
		 */
		this.currencyService.getCurrencies().subscribe(currencies=>{ 
			this.currencies = currencies;
		});
	}
	
	/**
	 * @method onCalculate()
	 * This method performs the conversion itself i.e. getting appropriate rate
	 * and performing a multiplication for the supplied value
	 */
	onCalculate(): void {
		if (this.form.invalid) 
		{
			alert("Please fill in all the inputs");
		}
		else
		{
			let d: ConversionRate = this.form.value;
			let a: string = d.sourceCurrency || '';
			let b: string = d.destinationCurrency || '';
		
			this.rateService.getRate(a,b).subscribe((rate:number)=>{
				let converted: any = Number(d.amount)*rate;			
				this.form.patchValue({rate: rate, converted: converted});
				this.conversionRate.rate = rate;
			});
		}
	}
	
	get f() { return this.form.controls; }
}
