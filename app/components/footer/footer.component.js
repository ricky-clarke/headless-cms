'use client'
import useSWR from 'swr';
import FooterWidget from "./footer_widget/footer-widget.component";
import Image from "next/image";
import styles from './footer.module.scss'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Footer ()  {

    const d = new Date();
    let year = d.getFullYear();

    const { data: widgets } = useSWR(`${process.env.NEXT_PUBLIC_HEADLESS}sidebars`, fetcher, { revalidateOnFocus: true, revalidateOnReconnect: false  });

    return (
        <>
            <footer className={`${styles.footer} footer bg-primary relative`}>
                <div className={`${styles.footer_top_container} container`}>
                    <div className={styles.footer__logo}>
                        <Image
                            src="/logo-white-small.svg" 
                            width={200}
                            height={40}
                            alt="" />
                    </div>
                    <div className="grid lg:grid-cols-4 mt-[3em] gap-[2em] w-[75%] z-10 relative">
                        {widgets?.map((block, i) => {
                                return(
                                    <FooterWidget key={i} widget_id={block.id}/>
                                ) })
                        }
                        <div className={styles.footer__contact}>
                            <div>
                                <a href="tel:01223208008" className="flex items-center gap-5">  
                                    <Image
                                    src="/tel-icon.svg"
                                    width={35}
                                    height={35}
                                    alt="" />
                                    <p>01223 208008</p>
                                </a>
                            </div>
                            <div>
                                <a href="mailto:hello@granite5.com" className="flex items-center gap-5">
                                    <Image
                                        src="/email-icon.svg"
                                        width={35}
                                        height={35}
                                        alt="" />
                                    <p>hello@granite5.com</p>
                                </a>
                            </div>
                            <div className="flex items-start gap-5">
                                <Image
                                src="/location-icon.svg"
                                width={35}
                                height={35}
                                alt="" />
                                <p>Granite 5 Ltd<br />Milton Hall,<br />Ely Rd, Milton<br />Cambridge CB24 6WZ</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer__graphic}>
                        <Image
                        src="/footer-graphic.svg"
                        width={600}
                        height={600}
                        alt="" />
                    </div>
            </div>

            <div className="container">
                <div className="footer__social flex gap-[1.5em] mt-[2em]">
                    <div>
                        <a href="https://www.instagram.com/granite5_digital/" target="_blank">
                            <Image 
                            src="/instagram-icon.svg"
                            width={30}
                            height={30}
                            alt="Instagram icon"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/company/granite-5-ltd" target="_blank">
                            <Image 
                            src="/linkedin-icon.svg"
                            width={30}
                            height={30}
                            alt="Instagram icon"
                            />
                        </a>
                    </div>
                </div>

                <div className="footer__bottom flex my-[2em]">

                    <div className="d-flex flex-column flex-md-row-reverse align-items-md-center">
                        <p className="mb-0">Copyright &copy; 1999 - {year}. All rights reserved.</p>
                    </div>

                </div>
            </div>
            
        </footer>

        </>
    )

}