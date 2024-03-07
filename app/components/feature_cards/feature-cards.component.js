import styles from './feature_cards.module.scss';
import Image from "next/image";
import { DM_Sans } from 'next/font/google';

const dm_sans = DM_Sans({ subsets: ['latin'], weight: '500' })

export default function FeatureCards ( props ) {

    const { data, spacing } = props;

    return (
        <>
            <section className={`module__feature_cards module ${spacing}`}>
                    <div className="grid sm:grid-cols-2 md:grid-cols-6">
                    {data?.map((row, i) => {
                            return(
                                <div key={i} className={`relative ${styles.feature_card} ${styles[`feature_card${i}`]}`}>
                                    {row.image && 
                                    <div className={`${styles.feature_card__img}`+ ' relative'}>
                                        <Image
                                        src={row.image}
                                        width={506}
                                        height={530}
                                        className="feature_img"
                                        alt="" />
                                    </div>}
                                    <div className={`${styles.feature_card__copy}`}>
                                        <h2 className={dm_sans.className}>{row.title}</h2>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
            </section>
        </>
    )
}