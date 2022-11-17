import {ConverterPanelComponent} from './../converter-panel/converter-panel.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [ HomeComponent ]
    })
    .compileComponents();    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should display sticky converter panel', () => {
	const fixture = TestBed.createComponent(HomeComponent);
	fixture.detectChanges();
	const compiled = fixture.debugElement.nativeElement;
  });
  
  it('should display 3 X 3 converted currency cards', () => {
	const fixture = TestBed.createComponent(HomeComponent);
	fixture.detectChanges();
	const compiled = fixture.debugElement.nativeElement;
  });
  
});
