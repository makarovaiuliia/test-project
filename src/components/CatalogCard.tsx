import { useDispatch, useSelector } from '@/service/store';
import { getIsLiked, removeLike, setLike } from '@/service/userSlice';
import { CatalogCardProps } from '@/types/props';
import { Link } from 'react-router-dom';

function CatalogCard({ user }: CatalogCardProps) {
    const { first_name, last_name, avatar, id } = user;
    const dispatch = useDispatch();

    const liked = useSelector(getIsLiked);
    const isLiked = liked.some((like) => like === id);

    const handleLikeToggle = () => {
        isLiked ? dispatch(removeLike(id)) : dispatch(setLike(id));
    };

    return (
        <div className="px-20 pt-9 pb-5 flex flex-col justify-center items-center rounded-sm shadow-md gap-4 w-80">
            <img src={avatar} alt="avatar" className="h-32 w-32 object-cover rounded-full" />
            <Link
                to={`/catalog/${id}`}
                className="text-2xl underline decoration-white duration-300 hover:decoration-black"
            >
                {first_name} {last_name}
            </Link>
            <div className="flex justify-end bg-grey-light rounded-md self-end mr-[-60px]">
                <button
                    onClick={handleLikeToggle}
                    className="w-7 h-7 flex justify-center items-center hover:cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 14"
                        className={`w-4 h-4 transition-all duration-300`}
                        stroke={isLiked ? '#512689' : '#151317'}
                        fill={isLiked ? '#512689' : '#F8F8F8'}
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.85 1A3.848 3.848 0 0 0 1 4.845C1 8.691 5.55 12.187 8 13c2.45-.813 7-4.309 7-8.155A3.848 3.848 0 0 0 11.15 1 3.847 3.847 0 0 0 8 2.634 3.844 3.844 0 0 0 4.85 1Z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default CatalogCard;
