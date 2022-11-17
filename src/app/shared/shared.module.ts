/**
 * @class SharedModule
 * =====================================================================================
 * This is a module with exports reusable in other modules. It eliminates need to import
 * each component separately in most modules . 
 * =====================================================================================
 * @author Leiney Ogeto
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
	RouterModule,
	FormsModule, 
	ReactiveFormsModule
  ]
})
export class SharedModule { }
