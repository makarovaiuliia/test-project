import { FieldError, UseFormRegister } from 'react-hook-form';
import { SignUpFormData, ValidFieldNamesSignUp } from '@/types/types';

export type FormFieldProps = {
    label: string;
    type: string;
    placeholder: string;
    name: ValidFieldNamesSignUp;
    register: UseFormRegister<SignUpFormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
};
