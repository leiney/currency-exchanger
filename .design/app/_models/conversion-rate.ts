export class ConversionRate {
	constructor(
		public sourceCurrency?: string,
		public destinationCurrency?: string,
		public rate?: number,
		public amount?: number,
		public converted?: number){		
	}
}
