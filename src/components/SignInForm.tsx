import { useForm } from 'react-hook-form';
import FormField from './FormField';
import { SignInFormData, SignInSchema } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from '@/service/store';
import { signInUser } from '@/service/userSlice';

function SignInForm() {
    const dispatch = useDispatch();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormData>({
        resolver: zodResolver(SignInSchema),
        mode: 'onChange',
    });

    const onSubmit = async (data: SignInFormData) => {
        await dispatch(signInUser(data));
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:w-500px flex flex-col gap-6 p-4 shadow-md rounded-2xl w-100dvw"
        >
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl">Вход</h1>
                <FormField<SignInFormData>
                    type="email"
                    placeholder="example@mail.ru"
                    label="Электронная почта"
                    name="email"
                    register={register}
                    error={errors.email}
                />
                <FormField<SignInFormData>
                    type="password"
                    label="Пароль"
                    placeholder="******"
                    name="password"
                    register={register}
                    error={errors.password}
                />
            </div>

            <button type="submit" className="px-2 py-4 bg-violet text-white rounded-lg">
                Войти
            </button>
        </form>
    );
}

export default SignInForm;
