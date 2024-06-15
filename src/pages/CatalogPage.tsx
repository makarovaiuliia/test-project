import Catalog from '@/components/Catalog';
import HeaderButton from '@/components/HeaderButton';
import { useDispatch, useSelector } from '@/service/store';
import { getUserList, setIsAuth } from '@/service/userSlice';
import { removeToken } from '@/utils/utils';
import { useState } from 'react';

export default function CatalogPage() {
    const dispatch = useDispatch();

    const [page, setPage] = useState<number>(2);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const total = useSelector((state) => state.user.total);

    const fetchMore = async () => {
        await dispatch(getUserList(page));
        setPage((prevState) => prevState + 1);
        setHasMore(page * 6 > total);
    };

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
            <main className="grid items-center justify-items-center">
                <Catalog />
                {hasMore && (
                    <button onClick={fetchMore} className="py-2 px-4 border-1px rounded-lg hover:opacity-80 w-max">
                        Показать еще
                    </button>
                )}
            </main>
        </>
    );
}
