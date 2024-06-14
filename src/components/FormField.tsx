import { useState } from 'react';
import { FormFieldProps } from '@/types/props';
import passwordIcon from '../../public/password.svg';

const FormField = ({ type, placeholder, name, register, error, valueAsNumber, label }: FormFieldProps) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordShown((prevState) => !prevState);
    };

    const isPasswordField = type === 'password';

    return (
        <div className="flex flex-col gap-2">
            {label && <label>{label}</label>}
            <div className="flex flex-col gap-1 relative text-base">
                <input
                    type={isPasswordField && passwordShown ? 'text' : type}
                    placeholder={placeholder}
                    {...register(name, { valueAsNumber })}
                    className="py-3 pr-10 pl-4 bg-grey-light text-grey max-w-500px"
                />
                {isPasswordField && (
                    <img
                        onClick={togglePasswordVisibility}
                        src={passwordIcon}
                        alt="Toggle Password Visibility"
                        className="absolute h-6 w-6 right-3 top-3 cursor-pointer"
                    />
                )}
                <span className="h-2 text-red text-sm">{error ? error.message : ''}</span>
            </div>
        </div>
    );
};

export default FormField;
