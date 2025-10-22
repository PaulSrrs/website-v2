import { Locale } from "@/i18n-config";
import Link from "next/link";
import Image from "next/image";

export default function LangSwitcher({ lang }: { lang: Locale }) {
    return lang === 'fr' ? <Link href="/en" locale="en">
        <Image
            className="w-7 h-7 cursor-pointer"
            alt="Drapeau Anglais"
            src="/flags/uk.svg"
            height={20}
            width={20}
        />
    </Link>
        : <Link href="/fr" locale="fr">
            <Image
                className="w-7 h-7 cursor-pointer"
                alt="Drapeau Français"
                src="/flags/fr.svg"
                height={20}
                width={20}
            />
        </Link>

}