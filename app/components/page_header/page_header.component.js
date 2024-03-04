import styles from './page_header.module.scss';
import FiveGraphic from '@/app/assets/svgs/five';
import Script from 'next/script';

export default function PageHeader( { data, display_type}) {

    const { 
        page_header_title_override,
        page_header_copy_below, 
        page_header_link,
        page_header_copy_above, 
        page_header_video
    } = data;

    const homePage = display_type == 'home_page' ? styles.home_page : '';
    const page_header_type = page_header_video && styles.page_header__video;

    return (
        <>
            <section className={`${styles.page_header} ${page_header_type} relative ${homePage}`}>
                <div className="container z-10">
                    <div className={`${styles.page_header__container}` + ' ld:w-[85%]'}>
                        <div>

                            {page_header_copy_above &&
                             <p className={styles.page_header__copy__top} dangerouslySetInnerHTML={{__html: page_header_copy_above }}></p>
                            }

                            {page_header_title_override && 
                                <h1 className='lg:w-9/12' dangerouslySetInnerHTML={{__html: page_header_title_override }}></h1>
                            }

                            {page_header_copy_below &&
                                <p className={styles.page_header__copy__bottom} dangerouslySetInnerHTML={{__html: page_header_copy_below }}></p>
                            }

                            { page_header_link &&
                                <a className={`${styles.page_header__link} btn btn--secondary`} href={page_header_link.url} target="_self">{page_header_link.title}</a>
                            }
                        </div>
                    </div>
                </div>

                {page_header_video ?
                <>
                    <div className={styles.page_header__video}>
                            <iframe src={`${page_header_video}?h=cfc02205f9?autoplay=1&loop=1&title=0&muted=1byline=0&portrait=0&background=1`} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen loading="lazy" title="video title here"></iframe>                    
                    </div><Script src="https://player.vimeo.com/api/player.js"></Script > 
                    <div className={styles.page_header__overlay}></div>
                </>
                :
                    <div className={styles.page_header__graphic}>
                        <FiveGraphic />
                    </div>
                }

            </section>
    </>
    )

}