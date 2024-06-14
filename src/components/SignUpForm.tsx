import { useForm } from 'react-hook-form';
import FormField from './FormField';
import { SignUpFormData, SignUpSchema } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from '@/service/store';
import { signUpUser } from '@/service/userSlice';

function SignUpForm() {
    const dispatch = useDispatch();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormData>({
        resolver: zodResolver(SignUpSchema),
        mode: 'onChange',
    });

    const onSubmit = async (data: SignUpFormData) => {
        await dispatch(signUpUser(data));
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:w-500px flex flex-col gap-6 p-4 shadow-md rounded-2xl w-100dvw"
        >
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl">Регистрация</h1>
                <FormField
                    type="text"
                    placeholder="Артур"
                    name="name"
                    register={register}
                    error={errors.name}
                    label="Имя"
                />
                <FormField
                    type="email"
                    placeholder="example@mail.ru"
                    label="Электронная почта"
                    name="email"
                    register={register}
                    error={errors.email}
                />
                <FormField
                    type="password"
                    label="Пароль"
                    placeholder="******"
                    name="password"
                    register={register}
                    error={errors.password}
                />
                <FormField
                    type="password"
                    label="Подтвердите пароль"
                    placeholder="******"
                    name="confirmPassword"
                    register={register}
                    error={errors.confirmPassword}
                />
            </div>

            <button type="submit" className="px-2 py-4 bg-violet text-white rounded-lg">
                Зарегистрироваться
            </button>
        </form>
    );
}

export default SignUpForm;
