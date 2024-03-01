import styles from './image_cards.module.scss';
import Image from "next/image";
import { DM_Sans } from 'next/font/google';

const dm_sans = DM_Sans({ subsets: ['latin'], weight: '500' })

export default function ImageCards ( props ) {

    const { data, spacing } = props;

    return (
        <>
            <section className={`${styles.module__image_cards} module ${spacing}`}>
                    <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                    {data?.map((row, i) => {
                            return(
                                <div key={i} className={`relative ${styles.image_card}`}>
                                    {row.image && 
                                    <div className={`${styles.image_card__img}`+ ' relative'}>
                                        <Image
                                        src={row.image}
                                        width={506}
                                        height={530}
                                        className="feature_img"
                                        alt="" />
                                    </div>}
                                    <div className={`${styles.image_card__content}`}>
                                        <div>
                                            <h3 className={dm_sans.className}>{row.title}</h3>
                                            <p>{row.copy}</p>
                                        </div>
                                        <span className={styles.image_card__link_text}>Find out more</span>
                                    </div>
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