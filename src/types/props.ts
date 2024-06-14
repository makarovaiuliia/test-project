import { FieldError, UseFormRegister } from 'react-hook-form';
import { FormData, ValidFieldNames } from './types';

export type FormFieldProps = {
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
};
