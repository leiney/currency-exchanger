/**
 * @class AppRoutingModule
 * =====================================================================================
 * This is the main routing configuration for the project. Include the main routes to 
 * modules and landing page only. DONT include children routes here
 * =====================================================================================
 * @author Leiney Ogeto
 */
 
import {LayoutComponent} from './shared/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '', 
		redirectTo: 'converter',
		pathMatch: 'full'
	},
	{ 
		path: 'converter', 
		component: LayoutComponent,		
		loadChildren: () => import('./pages/converter/converter.module').then(m => m.ConverterModule)
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
