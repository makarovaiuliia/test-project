import { HeaderButtonProps } from '@/types/props';

export default function HeaderButton({ styles = '', handler, title }: HeaderButtonProps) {
    return (
        <button
            onClick={handler}
            type="button"
            className={`absolute top-8 py-2 px-4 border-1px rounded-lg ${styles} hover:opacity-80`}
        >
            {title}
        </button>
    );
}
