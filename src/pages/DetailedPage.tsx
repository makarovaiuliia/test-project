import { useDispatch, useSelector } from '@/service/store';
import { getUserListSelector, setIsAuth } from '@/service/userSlice';
import { useNavigate, useParams } from 'react-router-dom';

import phone from '/phone.svg';
import mail from '/mail.svg';
import logout from '/logout.svg';
import back from '/back.svg';
import Contact from '@/components/Contact';
import HeaderButton from '@/components/HeaderButton';
import { removeToken } from '@/utils/utils';

export default function DetailedPage() {
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();
    const userList = useSelector(getUserListSelector);
    console.log(userList);
    const currentUser = userList.find((user) => user.id === parseInt(id!, 10))!;
    const { avatar, first_name, last_name, email } = currentUser;
    const navigate = useNavigate();

    const handleLogOut = () => {
        dispatch(setIsAuth(false));
        removeToken();
    };

    return (
        <>
            <header className="py-16 lg:px-48 md:px-16 px-4 bg-violet text-white text-center w-100% shadow-md">
                <HeaderButton handler={() => navigate('/')} styles="left-16" title="Назад" icon={back} />
                <HeaderButton handler={handleLogOut} styles="right-16" title="Выход" icon={logout} />
                <div className="flex md:flex-row flex-col-reverse gap-6  items-center justify-center md:justify-start">
                    <img src={avatar} alt="avatar" className="h-48 rounded-full" />
                    <div className="flex flex-col gap-4 md:items-start items-center">
                        <h1 className="lg:text-3xl text-36px">
                            {first_name} {last_name}
                        </h1>
                        <p className="md:text-32px text-2xl">Партнер</p>
                    </div>
                </div>
            </header>
            <main className="lg:px-48 md:px-16 px-8 flex md:gap-40 gap-4 mt-10 md:flex-row flex-col-reverse">
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
