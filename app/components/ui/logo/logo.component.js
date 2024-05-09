import Image from "next/image";

export default function Logo () {

    return (
        <>
            <Image
                priority
                src="/logo.svg" 
                width={165}
                height={74}
                alt="" />
        </>
    )
}