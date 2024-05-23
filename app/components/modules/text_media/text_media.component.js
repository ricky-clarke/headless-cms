
import styles from './text_media.module.scss';
import ButtonLink from '../../ui/button_link/button-link.component';
import ModuleTitle from '../../module_title/module_title.component';
import Image from 'next/image';
import Dot from '@/app/assets/svgs/dot';

export default function TextMedia ( data ) {

    const {moduleSpacing, moduleTitle, moduleTextMediaCopy, moduleTextMediaDeskPos, moduleTextMediaDots, moduleTextMediaLink, moduleTextMediaImage, moduleTextMediaMobPos, moduleTextMediaType } = data.data;

    const image = moduleTextMediaImage.node

    let deskImgPos =''
    let deskCopyPos = ''
    let mobImgPos = ''
    let mobCopyPos = ''

    switch(moduleTextMediaDeskPos) {
        case('left'):
             deskImgPos = 'lg:order-1';
             deskCopyPos = 'lg:order-2';
        break;
        default: 
            deskImgPos = 'lg:order-2';
            deskCopyPos = 'lg:order-1';
    }

    switch(moduleTextMediaMobPos) {
        case('above'):
             mobImgPos = 'order-1';
             mobCopyPos = 'order-2';
        break;
        default: 
            mobImgPos = 'order-2';
            mobCopyPos = 'order-1';
    }

    const dots3 = Array(3).fill(null);
    const dots4 = Array(4).fill(null);

    return (
        <>
         <section className={`${styles.module__text_media} ${moduleSpacing} module`}>
            <div className="container grid lg:grid-cols-2 gap-[2em] xl:items-center">
                <div className={`${mobCopyPos} ${deskCopyPos}`}>
                    <ModuleTitle mod_title={moduleTitle.title} mod_type={moduleTitle.titleType}/>
                    <div dangerouslySetInnerHTML={{__html: moduleTextMediaCopy}}></div>
                    {moduleTextMediaLink?.url && <div className='mt-5'><ButtonLink url={moduleTextMediaLink.url} title={moduleTextMediaLink.title} link_style="btn--white" target={moduleTextMediaLink.target} /></div> }
                </div>
                <div className={`${mobImgPos} ${deskImgPos} relative overflow-hidden text-right`}>
                    {moduleTextMediaType == 'image' && 
                    <Image src={image.sourceUrl} height={400} width={610} alt={image.altText} /> }
                    {moduleTextMediaDots &&  

                    <div class={styles.dots_container}>
                        <div class={styles.dots_column}>
                            <div class={styles.dots_space}></div> 
                                {dots3.map((_, index) => (
                                    <div className={styles.dot} key={index}><Dot /></div>
                                ))}
                        </div>
                        <div class={styles.dots_column}>
                            {dots4.map((_, index) => (
                                <div className={styles.dot} key={index}><Dot /></div>
                            ))}
                        </div>
                    </div>

                    }
                </div>
            </div>
        </section>
        </>
    )
}