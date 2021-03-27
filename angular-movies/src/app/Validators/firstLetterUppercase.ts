import { AbstractControl, ValidatorFn} from '@angular/forms';

export function firstLetterUppercase(): ValidatorFn{
    return (control: AbstractControl) => {
        const value = control.value as string;
        if (!value) { return; }
        if(value.length === 0 ) { return; }

        const firstLetter = value[0];
        if (firstLetter !== firstLetter.toUpperCase()){
            return{
                firstLetterUppercase: {
                    message: 'The first letter must be uppercase'
                }
            }
        }
    }
}