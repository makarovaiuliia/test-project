import { useSelector } from '@/service/store';
import { getUserListSelector } from '@/service/userSlice';
import CatalogCard from './CatalogCard';

function Catalog() {
    const userList = useSelector(getUserListSelector);

    return (
        <div className="grid grid-cols-3 gap-5">
            {userList.map((user) => (
                <CatalogCard user={user} key={user.id} />
            ))}
        </div>
    );
}

export default Catalog;
