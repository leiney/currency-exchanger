/**
 * @class CurrencyCardComponent
 * =====================================================================================
 * This component receives conversion rate object information and displays a card
 * showing the source currency and destination currency equivalents
 * =====================================================================================
 * @author Leiney Ogeto
 */
import {ConversionRate} from './../../../_models/conversion-rate';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.css']
})
export class CurrencyCardComponent implements OnInit {

	/* currency rate information is store here */
	@Input() conversionRate: ConversionRate; 
	
	constructor() { }

	ngOnInit(): void {
	  
	}
}
