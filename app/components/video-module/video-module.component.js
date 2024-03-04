import styles from './video.module.scss';
import ModuleTitle from '../module_title/module_title.component';
import ButtonLink from '../button_link/button-link.component';
import Script from 'next/script';

export default function VideoModule ( props ) {

    const { data, module_title, spacing, bg } = props;

    const bg_color = 'bg-'+bg;

    return (
        <>
            <section className={`${styles.module__video} module ${spacing} ${bg_color}`}>
                    <div className="container">
                        {data && 
                        <div className={styles.video_container}>
                            <div className="flex justify-between">
                                <ModuleTitle mod_title={module_title.title} mod_type={module_title.title_type}/>
                                <div>
                                    <ButtonLink
                                     url="#"
                                     title="Get in touch"
                                     link_style="btn--white" />
                                </div>
                            </div>
                            <div className={styles.iframe_wrapper}><iframe src={`${data}?h=cfc02205f9&autoplay=0&title=0&byline=0&portrait=0`} 
                            allow="fullscreen; picture-in-picture" 
                            allowFullScreen loading="lazy" title=""></iframe></div>
                            <Script src="https://player.vimeo.com/api/player.js"></Script>
                        </div>
                        } 
                    </div>
            </section>
        </>
    )
}