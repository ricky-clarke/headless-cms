
import styles from './text.module.scss'

export default function Text ( data ) {

    const { textColumnOne, textColumnTwo, textNumberColumns, moduleSpacing } = data.data;

    const text_grid = textNumberColumns == '2' && 'text_grid--2 grid lg:grid-cols-2 gap-[2em]';
    const text_col = textNumberColumns == '1' ? 'text_grid--1 lg:w-3/5' : '';

    return (
        <>
         <section className={`${styles.module__text} ${moduleSpacing} module`}>
            <div className={`${styles.text_grid__2} ${text_grid} container`}>
                <div dangerouslySetInnerHTML={{__html: textColumnOne}} className={`text_column__one ${text_col}`}></div>
               { textColumnTwo && <div dangerouslySetInnerHTML={{__html: textColumnTwo}} className="text_column__two"></div> }
            </div>
        </section>
        </>
    )
}