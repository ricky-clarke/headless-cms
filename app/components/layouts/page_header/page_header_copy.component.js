import styles from './page_header.module.scss'
import ButtonLink from '../../ui/button_link/button-link.component';
import Link from 'next/link';

export default async function PageHeaderCopy( { data, title} ) {

    const {
        pageHeaderTitleOverride,
        pageHeaderCopyBelow, 
        pageHeaderCopyAbove,
        pageHeaderLink, 
         } = data

    const pageTitle = pageHeaderTitleOverride != null ? pageHeaderTitleOverride : title;

         
    return(
        <>
              <div className="container z-10">
                    <div className={`${styles.page_header__container}` + ' lg:w-[70%]'}>
                        <div>
                            
                            {pageHeaderCopyAbove &&
                             <p className={styles.page_header__copy__top} dangerouslySetInnerHTML={{__html: pageHeaderCopyAbove }}></p>
                            }

                            <h1 dangerouslySetInnerHTML={{__html: pageTitle }}></h1>
                       
                            {pageHeaderCopyBelow &&
                                <p className={styles.page_header__copy__bottom} dangerouslySetInnerHTML={{__html: pageHeaderCopyBelow }}></p>
                            }

                            { pageHeaderLink &&
                                    <div className='mt-[2em] d-inline-block'>
                                        <ButtonLink
                                        url={pageHeaderLink.url}
                                        title={pageHeaderLink.title}
                                        link_style={`btn--secondary`} />
                                    </div>
                            }
                        </div>
                    </div>
                </div>
        </>

    )



}