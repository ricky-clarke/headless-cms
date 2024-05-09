import styles from './image_cards.module.scss';
import Image from "next/image";
import Link from 'next/link';

export default function ImageCards ( data ) {

    const { moduleSpacing, imageCards} = data.data;

    return (
        <>
            <section className={`${styles.module__image_cards} module ${moduleSpacing}`}>
                    <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                    {imageCards && imageCards?.map((row, i) => {
                            return(
                                <div key={i} className={`relative ${styles.image_card}`}>
                                    {row.image && 
                                    <div className={`${styles.image_card__img}`+ ' relative'}>
                                        <Image
                                        src={row.image.node.sourceUrl}
                                        width={506}
                                        height={530}
                                        className="feature_img"
                                        alt="" />
                                    </div>}
                                    <div className={`${styles.image_card__content}`}>
                                        <div>
                                            <h3>{row.title}</h3>
                                            <p>{row.copy}</p>
                                        </div>
                                        <span className={styles.image_card__link_text}>Find out more</span>
                                    </div>
                                    {row.link && <Link href={row.link.url} aria-label="More information" target={row.link.target}></Link> }
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </section>
        </>
    )
}