import styles from './video.module.scss';
import ModuleTitle from '../../module_title/module_title.component';
import ButtonLink from '../../ui/button_link/button-link.component';
import Script from 'next/script';

export default function VideoModule ( { data } ) {

    const { moduleTitle, moduleBgModuleBg, moduleSpacing,  videoUrl, videoLink, backgroundColourType } = data;

    const bg_color = moduleBgModuleBg !='white' ? 'bg-'+moduleBgModuleBg : '';
    const bg_color_type = moduleBgModuleBg !='white' ? 'bg-'+backgroundColourType : '';

    return (
        <>
            <section className={`${styles.module__video} module ${moduleSpacing} ${bg_color} ${bg_color_type}`}>
                    <div className="container">
                        <div className={styles.video_container}>
                            <div className="flex justify-between">
                                <ModuleTitle mod_title={moduleTitle.title} mod_type={moduleTitle.titleType}/>
                                {videoLink?.url &&
                                    <div>
                                        <ButtonLink
                                        url={videoLink.url}
                                        title={videoLink.title}
                                        link_style="btn--white" />
                                    </div>
                                }
                            </div>
                            <div className={styles.iframe_wrapper}><iframe src={`${videoUrl}?h=cfc02205f9&autoplay=0&title=0&byline=0&portrait=0`} 
                            allow="fullscreen; picture-in-picture" 
                            allowFullScreen loading="lazy" title="video title here"></iframe></div>
                            <Script src="https://player.vimeo.com/api/player.js"></Script>
                        </div>
                        
                    </div>
            </section>
        </>
    )
}