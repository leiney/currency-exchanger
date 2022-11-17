import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConverterPanelComponent } from './converter-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ConverterPanelComponent', () => {
  let component: ConverterPanelComponent;
  let fixture: ComponentFixture<ConverterPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ ConverterPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should amount input type as a number', () => {
	const fixture = TestBed.createComponent(ConverterPanelComponent);
	fixture.detectChanges();
	const compiled = fixture.debugElement.nativeElement;
	expect(compiled.querySelector('[formControlName="amount"]').type).toContain('number');
  });
  
  it('should have a source currency dropdown with values', () => {
	const fixture = TestBed.createComponent(ConverterPanelComponent);
	fixture.detectChanges();
	const compiled = fixture.debugElement.nativeElement;
	const children = compiled.querySelector('[formControlName="sourceCurrency"]').options;	
	expect(children.length>0).toBeTruthy();
  });
  
  it('should have a destination currency dropdown with values', () => {
	const fixture = TestBed.createComponent(ConverterPanelComponent);
	fixture.detectChanges();
	const compiled = fixture.debugElement.nativeElement;
	const children = compiled.querySelector('[formControlName="destinationCurrency"]').options;	
	expect(children.length>0).toBeTruthy();
  });
  
});
