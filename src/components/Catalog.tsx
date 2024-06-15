import { useSelector } from '@/service/store';
import { getUserListSelector } from '@/service/userSlice';
import CatalogCard from './CatalogCard';

function Catalog() {
    const userList = useSelector(getUserListSelector);

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-10">
            {userList.map((user) => (
                <CatalogCard user={user} key={user.id} />
            ))}
        </div>
    );
}

export default Catalog;
