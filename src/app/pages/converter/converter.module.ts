import {SharedModule} from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConverterRoutingModule } from './converter-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ConverterPanelComponent } from './converter-panel/converter-panel.component';
import { CurrencyCardComponent } from './currency-card/currency-card.component';
import { CurrencyChartComponent } from './currency-chart/currency-chart.component';


@NgModule({
  declarations: [HomeComponent, DetailComponent, ConverterPanelComponent, CurrencyCardComponent, CurrencyChartComponent],
  imports: [
    CommonModule,
    ConverterRoutingModule,
    SharedModule
  ]
})
export class ConverterModule { }
