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



@NgModule({
  declarations: [HeaderComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
