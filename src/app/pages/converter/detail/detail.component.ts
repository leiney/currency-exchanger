import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

	title: string = 'Currency Details';

	constructor() { }

	ngOnInit(): void {
		
	}
}
