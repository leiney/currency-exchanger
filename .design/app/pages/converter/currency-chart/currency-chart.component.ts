import {ElementSelectionService} from './../../../element-selection.service';
import {ComponentInspectorService} from './../../../component-inspector.service';
import {ConversionRate} from './../../../_models/conversion-rate';
import {CurrencyService} from './../../../_services/currency.service';
import {ConversionRateService} from './../../../_services/conversion-rate.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'currency-chart',
  templateUrl: './currency-chart.component.html',
  styleUrls: ['./currency-chart.component.css']
})
export class CurrencyChartComponent implements OnInit {

	/* parents feed chart through 'conversionRate' data variable */
	@Input() conversionRate: ConversionRate; 
	
	months: string[] = ['Jan','Feb','Mar','Apr'];
	colors: string[] = ['red','blue','green','white'];

	chartData: any[] = [];

	constructor(public __elementSelectionService:ElementSelectionService, private __componentInspectorService:ComponentInspectorService,

			public rateService: ConversionRateService,
			public currencyService: CurrencyService) {this.__componentInspectorService.getComp(this);
 		
	}

  	ngOnInit(): void {
  		this.onDrawChart();
  	}
  	
  	onDrawChart(e?: any){
  		this.chartData = [];
  		let i: number = 0;
  		
		for(let m of this.months){  		
			if(this.conversionRate)
			{
				let rate: number = (Math.random()+0.5)*(this.conversionRate.converted || 0);
				let len: number = Math.pow(10,String(Math.round(rate)).length-2);
				let size:string = (Math.round(rate)/len) + 'px';
				let data: any = {rate: rate, color: this.colors[i], size: size};		
				this.chartData.push(Object.assign({},this.conversionRate,data));
				i++;
			}
		}
  	}
  	
  	/**
	 * @method 
	 * This will redraw chart with new rates if input value changes
	 */
	ngOnChanges(c: SimpleChanges) { console.log(this.conversionRate);
		 this.onDrawChart();
    }

}
