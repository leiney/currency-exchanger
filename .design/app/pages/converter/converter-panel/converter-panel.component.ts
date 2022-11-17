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
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'converter-panel',
  templateUrl: './converter-panel.component.html',
  styleUrls: ['./converter-panel.component.css']
})
export class ConverterPanelComponent implements OnInit {
	
	/* showMore determines visibility of the 'More Details' button */
	@Input() showMore: boolean; 
	
	/* onChange informs the parent component that input values have changed */
	@Output() onChange = new EventEmitter<any>();
	
	/* parents feed converter panel through 'conversionRate' data variable */
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
	        amount: [0,[Validators.required]],
	        rate: [null],
	        converted: [null]
	    });
		
		/**
		 * populate form with default values 
		 */
		 this.form.patchValue(this.conversionRate);
		 
		/**
		 * !showMore means currency is set, hence run the calculate method
		 */
		 if(this.showMore==false){
			 this.onCalculate();
		 }
		 
		
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
	onCalculate(e?: any): void {
		if(this.form && this.form.value){
			let d: ConversionRate = this.form.value;
			let a: string = d.sourceCurrency || '';
			let b: string = d.destinationCurrency || '';
		
			this.rateService.getRate(a,b).subscribe((rate:number)=>{
				let converted: any = Number(d.amount)*rate;			
				this.form.patchValue({rate: rate, converted: converted});
				this.conversionRate.rate = rate;
				this.handleInputChange(this.form.value);
			});
		}
	}
	
	/**
	 * @method 
	 * This will trigger conversion if currency input value changes
	 */
	ngOnChanges(c: SimpleChanges) { 
		 if(this.form && this.form.value){ 
			 this.handleInputChange(this.form.value);
		 }
    }
	
	/**
	 * @method 
	 * This will pass the $event object to the parent component.
	 */
	handleInputChange(conversionRate?: any){	    
	    this.onChange.emit(conversionRate);
	}
	
	/**
	 * @method 
	 * A shorthand accessor method for the form controls used in views
	 */
	get f() { return this.form.controls; }
}
