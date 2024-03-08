'use client'
import { useContext } from "react"
import globalContext from "@/app/context/context";
import Link from 'next/link';
import Logo from '../logo/logo.component';
import PrimaryMenu from '../primary_menu/primary_menu.component';
import './header.scss'

export default function Header ()  {

    const { dispatch } = useContext(globalContext);

    return (
        <header className='fixed lg:absolute w-full z-40'>
            <div className="container py-4 flex items-center justify-between">
                <Link href="/" aria-label="Granite 5" onClick={() => {  dispatch({type:"MENUOPEN", payload: false }); }}>
                    <Logo />
                </Link>
                    <PrimaryMenu />
            </div>
        </header>
    )

}