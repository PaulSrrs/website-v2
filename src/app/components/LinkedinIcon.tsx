import Image from "next/image";

export default function LinkedinIcon() {
    return <Image className="cursor-pointer w-5 h-5 first:mr-4"
                  alt="Icône de Linkedin"
                  src={"/social-networks/linkedin-dark.svg"}
                  height={20}
                  width={20}/>
}
