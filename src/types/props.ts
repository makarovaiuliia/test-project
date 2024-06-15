import { FieldError, FieldValues, UseFormRegister, Path } from 'react-hook-form';
import { User } from './types';

export interface FormFieldProps<T extends FieldValues> {
    label: string;
    type: string;
    placeholder: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
}

export interface CatalogCardProps {
    user: User;
}

export interface ContactProps {
    href: string;
    icon: string;
    contactInfo: string;
    contactType: string;
}

export interface HeaderButtonProps {
    styles?: string;
    title: string;
    handler: () => void;
}
