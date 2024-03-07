import Image from 'next/image';
import Link from 'next/link';
import PrimaryMenu from '../primary_menu/primary_menu.component';
import './header.scss'

export default function Header ()  {
    return (
        <header className='fixed lg:absolute w-full z-40 bg-secondary lg:bg-transparent'>
            <div className="container py-4 flex items-center justify-between">
                <Link href="/" aria-label="Granite 5">
                    <Image
                        priority
                        src="/logo.svg" 
                        width={165}
                        height={74}
                        alt="" />
                </Link>
                    <PrimaryMenu />
            </div>
        </header>
    )

}