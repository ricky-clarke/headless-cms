
import styles from './large_image.module.scss';
import Image from 'next/image';

export default function LargeImage ( data ) {

    const { moduleSpacing, imageContainerWidth, image } = data.data;

    const image_count = image.length;

    return (
        <>
         <section className={`${styles.module__large_image} ${moduleSpacing} module`}>
            {/* <div className={`${imageContainerWidth == 'contain' ? 'container' : ''}
             ${image_count == 2 ? 'md:grid-cols-2 gap-[2em]' : styles.grid_full } grid`}>
                    {image?.map((row, i) => {
                        return(
                            <div key={i} className={styles.module__large_image_wrap}>
                                {row.image && 
                                    <Image
                                    width={2000}
                                    height={700}
                                    src={row.image.node.sourceUrl}
                                    sizes={row.image.node.srcSet}
                                    alt={row.image.node.altText} />
                                }
                            </div>
                         )
                        })
                    }
            </div> */}
        </section>
        </>
    )
}