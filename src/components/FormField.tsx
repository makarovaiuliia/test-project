import { FormFieldProps } from '@/types/props';

const FormField = ({ type, placeholder, name, register, error, valueAsNumber, label }: FormFieldProps) => (
    <div className="flex flex-col gap-2">
        <label>{label}</label>
        <div className="flex flex-col gap-1">
            <input
                type={type}
                placeholder={placeholder}
                {...register(name, { valueAsNumber })}
                className="py-3 pr-2 pl-4 bg-grey-light text-grey"
            />
            <span className="h-2 text-red text-4xl">{error ? error.message : ''}</span>
        </div>
    </div>
);

export default FormField;
