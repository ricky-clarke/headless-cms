
import styles from './text.module.scss'

export default function Text ( props ) {

    const { text_column_one, text_column_two, text_number_columns, module_spacing } = props.data;

    const text_grid = text_number_columns == '2' && 'text_grid--2 grid grid-cols-2 gap-[2em]';

    return (
        <>
         <section className={`${styles.module__text} ${module_spacing} module`}>
            <div className={`${styles.text_grid__2} ${text_grid} container`}>
                <div dangerouslySetInnerHTML={{__html: text_column_one}}></div>
                <div dangerouslySetInnerHTML={{__html: text_column_two}}></div>
            </div>
        </section>
        </>
    )
}