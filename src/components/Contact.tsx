import { ContactProps } from '@/types/props';

export default function Contact({ contactInfo, href, icon, contactType }: ContactProps) {
    return (
        <li className="flex gap-2">
            <img src={icon} alt={contactType} className="h-6" />
            <a href={href} className="underline decoration-white duration-300 hover:decoration-black">
                {contactInfo}
            </a>
        </li>
    );
}
