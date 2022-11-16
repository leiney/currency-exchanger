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
