import { useDispatch, useSelector } from '@/service/store';
import { getUserListSelector, setIsAuth } from '@/service/userSlice';
import { useNavigate, useParams } from 'react-router-dom';

import phone from '/phone.svg';
import mail from '/mail.svg';
import Contact from '@/components/Contact';
import HeaderButton from '@/components/HeaderButton';
import { removeToken } from '@/utils/utils';

export default function DetailedPage() {
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();
    const userList = useSelector(getUserListSelector);
    const currentUser = userList.find((user) => user.id === parseInt(id!, 10))!;
    const { avatar, first_name, last_name, email } = currentUser;
    const navigate = useNavigate();

    const handleLogOut = () => {
        dispatch(setIsAuth(false));
        removeToken();
    };

    return (
        <>
            <header className="py-16 px-48 bg-violet text-white text-center w-100% shadow-md">
                <HeaderButton handler={() => navigate('/')} styles="left-16" title="Назад" />
                <HeaderButton handler={handleLogOut} styles="right-16" title="Выход" />
                <div className="flex gap-6  items-center">
                    <img src={avatar} alt="avatar" className="h-48 rounded-full" />
                    <div className="flex flex-col gap-4 items-start">
                        <h1 className="text-3xl">
                            {first_name} {last_name}
                        </h1>
                        <p className="text-32px">Партнер</p>
                    </div>
                </div>
            </header>
            <main className="px-48 flex gap-40 mt-10">
                <div className="grid gap-4">
                    <p>
                        Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов,
                        включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он
                        помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет
                        применения новейших технологий и увеличивать продажи, используя самые современные аналитические
                        инструменты.
                    </p>
                    <p>
                        В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с
                        трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов
                        — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности,
                        уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше
                        развиваться самостоятельно". Помимо разнообразных проектов для клиентов финансового сектора,
                        Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник
                        эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также
                        инвестором других бизнес-проектов.
                    </p>
                    <p>
                        Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную
                        предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в
                        Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других
                        бизнес-проектов.
                    </p>
                </div>

                <ul className="flex flex-col gap-6">
                    <Contact
                        contactType="phone"
                        contactInfo="+7 (954) 333-44-55"
                        href="tel:+7(954)333-44-55"
                        icon={phone}
                    />
                    <Contact contactType="email" contactInfo={email} href={`mailto:${email}`} icon={mail} />
                </ul>
            </main>
        </>
    );
}
