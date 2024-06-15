import Catalog from '@/components/Catalog';
import HeaderButton from '@/components/HeaderButton';
import { useDispatch } from '@/service/store';
import { setIsAuth } from '@/service/userSlice';
import { removeToken } from '@/utils/utils';

export default function CatalogPage() {
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(setIsAuth(false));
        removeToken();
    };

    return (
        <>
            <header className="py-16 px-300px bg-violet text-white text-center">
                <HeaderButton handler={handleLogOut} styles="right-16" title="Выход" />
                <div>
                    <h1 className="text-3xl">Наша команда</h1>
                    <p className="text-2xl">
                        Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и
                        умеющие находить выход из любых, даже самых сложных ситуаций.
                    </p>
                </div>
            </header>
            <main className="mt-10">
                <Catalog />
            </main>
        </>
    );
}
