import Link from "next/link";
import Image from "next/image";
import styles from './card.module.scss'

export default function Card ( props ) {

    const { link, title, feat_img, excerpt, link_text } = props;

    return (
        <>
          <div className={styles.card}>
            <div className={styles.card__img}>
                <Image src={feat_img}
                width={375}
                height={250} 
                alt=""/>
             </div>
            <header className={styles.card__header}>
                <h2>{title}</h2>
            </header>
                <div dangerouslySetInnerHTML={{__html: excerpt }}></div>
                {link_text && <p className="mt-4 bright_purple">{link_text}</p>}
            <Link href={link} aria-label="Read more"></Link>
          </div>
        </>
    )
}