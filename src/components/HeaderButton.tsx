import { HeaderButtonProps } from '@/types/props';
import { useEffect, useState } from 'react';

export default function HeaderButton({ styles = '', handler, title, icon }: HeaderButtonProps) {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1000);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobile) {
        return (
            <button
                onClick={handler}
                type="button"
                className={`absolute top-8 w-4 h-4 ${styles} hover:opacity-80`}
                style={{ backgroundImage: `url(${icon})` }}
                aria-label={title}
            />
        );
    }

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
