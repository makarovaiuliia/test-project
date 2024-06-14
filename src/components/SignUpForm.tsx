import { useForm } from 'react-hook-form';
import FormField from './FormField';
import { FormData, SignUpSchema } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from '@/service/store';
import { signUpUser } from '@/service/userSlice';
import { useState } from 'react';

function SignUpForm() {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(SignUpSchema),
    });

    const [error, setError] = useState<string | undefined>(undefined);

    const onSubmit = async (data: FormData) => {
        try {
            await dispatch(signUpUser(data));
        } catch (error) {
            if (error) {
                if (typeof error === 'object' && 'error' in error) {
                    if (typeof error.error === 'string') setError(error.error);
                }
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid col-auto">
                <h1 className="text-3xl font-bold mb-4">Регистрация</h1>
                <FormField type="text" placeholder="Имя" name="name" register={register} error={errors.name} />
                <FormField
                    type="email"
                    placeholder="Электронная почта"
                    name="email"
                    register={register}
                    error={errors.email}
                />
                <FormField
                    type="password"
                    placeholder="Пароль"
                    name="password"
                    register={register}
                    error={errors.password}
                />
                <FormField
                    type="password"
                    placeholder="Подтвердите пароль"
                    name="confirmPassword"
                    register={register}
                    error={errors.confirmPassword}
                />
                <button type="submit" className="submit-button">
                    Submit
                </button>
                <span>{error}</span>
            </div>
        </form>
    );
}

export default SignUpForm;
