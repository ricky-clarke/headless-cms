'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PrimaryMenu from '../primary_menu/primary_menu.component';
import styles from './header_fixed.module.scss'

export default function HeaderFixed ()  {

    // Add and Remove Class on scroll
    const [scrolltopdata, setscrolltopdata] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 15) {
                setscrolltopdata('');
            } else {
                setscrolltopdata(styles.header_fixed_active);
            }
        });
    }, [])

    return (
        <header className={`${styles.header_fixed} hidden lg:block fixed w-full z-50 bg-secondary ${scrolltopdata}`}>
            <div className="container py-4 flex items-center justify-between">
                <Link href="/" aria-label="Granite 5">
                    <Image
                        priority
                        src="/logo-5.svg" 
                        width={35}
                        height={52}
                        alt="" />
                </Link>
                <PrimaryMenu />
            </div>
        </header>
    )

}