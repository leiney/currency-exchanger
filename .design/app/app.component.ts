import {ElementSelectionService} from './element-selection.service';
import {ComponentInspectorService} from './component-inspector.service';
/**
 * @class AppComponent
 * =====================================================================================
 * This is the main component of the project. All other components will be accessed as 
 * children components. Avoid putting too much code in this component. 
 * =====================================================================================
 * @author Leiney Ogeto
 */
 
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public __elementSelectionService:ElementSelectionService,private __componentInspectorService:ComponentInspectorService) { this.__componentInspectorService.getComp(this); }title = 'Currency Converter';
}
