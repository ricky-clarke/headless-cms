
import styles from './work.module.scss'
import WorkLatest from './work-latest.component';
import WorkSelected from './work-selected.component';
import WorkCategory from './work-category.component';

export default async function Work ( data ) {

    const { display, moduleSpacing } = data.data;

    const selectedCategoryId = data.data.workCategory?.nodes[0]?.termTaxonomyId;

    return (
        <>
         <section className={`${styles.module__work} ${moduleSpacing} module`}>
            <div className={`${styles.module__work__grid} container grid lg:grid-cols-12 sm:grid-rows-2 gap-[2em]`}>
              {display == 'latest' && <WorkLatest /> }
              {display == 'select' && <WorkSelected data={data.data.posts.edges} /> }
              {display == 'category' && <WorkCategory data={selectedCategoryId}/> }
            </div>
        </section>
        </>
    )
}