import { CatalogCardProps } from '@/types/props';

function CatalogCard({ user }: CatalogCardProps) {
    const { first_name, last_name, avatar } = user;

    return (
        <div className="px-20 pt-9 pb-5 flex flex-col justify-center items-center rounded-sm shadow-md gap-4">
            <img src={avatar} alt="avatar" className="h-32 rounded-full" />
            <p className="text-2xl">
                {first_name} {last_name}
            </p>
        </div>
    );
}

export default CatalogCard;
