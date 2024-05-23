import Logo from '../../ui/logo/logo.component';
import PrimaryMenu from '../../ui/primary_menu/primary_menu.component';
import Link from 'next/link';
import './header.scss'

export default function Header ()  {

    return (
        <>
        <header className='fixed lg:absolute w-full z-40'>
            <div className="container py-4 flex items-center justify-between">
                {/* <Link href="/" aria-label="Granite 5" onClick={() => {  dispatch({type:"MENUOPEN", payload: false }); }}>
                    <Logo />
                </Link> */}
                <Link href="/" aria-label="Granite 5">
                    <Logo />
                </Link>
                <PrimaryMenu />
            </div>
        </header>
        </>
    )

}