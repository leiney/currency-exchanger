import { FormControl } from '@angular/forms';

export function NumericValidator(len: number = 0) {
	return (c: FormControl): { [key: string]: any } => {
	  let regex = new RegExp('(?=(?:\\D*\\d){' + len + '})');
	  if (len==0 || regex.test(c.value)) {
	    return null;
	  } else {
	    return { numeric: true }
	  }
	}
}