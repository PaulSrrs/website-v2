import Image from "next/image";

export default function NextJsIcon() {
    return <Image className="cursor-pointer w-5 h-5 first:mr-4"
                  alt="Icône de Linkedin"
                  src={"/skills/nextjs-dark.png"}
                  height={84}
                  width={140}/>
}
