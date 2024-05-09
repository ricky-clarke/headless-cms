import styles from './feature_cards.module.scss';
import Image from "next/image";
import Link from 'next/link';

export default async function FeatureCardTemplate ( props ) {

    const { title, img_url, link} = props

    return(
        <>
              <div className={`${styles.feature_card__img}`+ ' relative'}>
                    <Image
                    loading="lazy"
                    src={img_url}
                    width={506}
                    height={530}
                    className="feature_img"
                    alt="" />
                </div>
                <div className={`${styles.feature_card__copy}`}>
                    <h2>{ title }</h2>
                </div> 
                <Link href={link} aria-label="Read more"></Link>
        </>
    )

}