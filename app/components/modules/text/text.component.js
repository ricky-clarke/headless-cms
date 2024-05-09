
import styles from './text.module.scss'

import ButtonLink from '../../ui/button_link/button-link.component';

export default function Text ( data ) {

    const { textColumnOne, textColumnTwo, textNumberColumns, link, linkTwo, moduleSpacing } = data.data;

    const text_grid = textNumberColumns == '2' && 'text_grid--2 grid lg:grid-cols-2 gap-[2em]';
    const text_col = textNumberColumns == '1' ? 'text_grid--1 lg:w-3/5' : '';

    return (
        <>
         <section className={`${styles.module__text} ${moduleSpacing} module`}>
            <div className={`${styles.text_grid__2} ${text_grid} container`}>
                <div>
                <div dangerouslySetInnerHTML={{__html: textColumnOne}} className={`text_column__one ${text_col}`}></div>
                    {link?.url && <div className='mt-5'><ButtonLink url={link.url} title={link.title} link_style="btn--white" target={link.target} /></div> }
                </div>
                {}
               { textColumnTwo && 
               <div>
                    <div dangerouslySetInnerHTML={{__html: textColumnTwo}} className="text_column__two"></div>
                    {linkTwo?.url && <div className='mt-5'><ButtonLink url={linkTwo.url} title={linkTwo.title} link_style="btn--white" target={linkTwo.target}  /></div> }
                </div>
                }
            </div>
        </section>
        </>
    )
}