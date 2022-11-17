import {DetailComponent} from './detail/detail.component';
import {HomeComponent} from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home',pathMatch: 'full'},
	{ path: 'home', component: HomeComponent},
	{ path: 'details', component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConverterRoutingModule { }
