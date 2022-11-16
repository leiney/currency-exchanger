import {ElementSelectionService} from './../../../element-selection.service';
import {ComponentInspectorService} from './../../../component-inspector.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

	title: string = 'Currency Details';

	constpublic __elementSelectionService:ElementSelectionService, private __componentInspectorService:ComponentInspectorServiceructhis.__componentInspectorService.getComp(this);
tor() { }

	ngOnInit(): void {
		
	}
}
