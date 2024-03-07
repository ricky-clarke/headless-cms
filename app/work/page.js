import '../globals.scss';
import styles from './work_grid.module.scss'
import WorkCard from '@/app/components/work_tile/work_tile.component';

export const metadata = {
  title: 'Work',
  description: '',
  keywords: [''],
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },

}

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS}work`);
  return res.json();
}

export default  async function Page() {

  const data = await getData();

  return (
    <>
        <div className='container header--bg'>
            <div className='mt-[13em] mb-[8em] w-1/2'>
                <h1 className={styles.work_title}>Our <span className={`${styles.serif} bright_purple serif`}>work</span></h1>
                <p>We know that any digital marketing agency is only ever as good as the work and results it produces. Fortunately, Granite 5 has had the privilege of working with some fantastic clients over the years – here is just a small selection of case studies.</p>
            </div>
            <div className={`${styles.work_tile_grid} grid mb-10`}>
            {data && data?.map((post, i) => {
                return(
                    <>
                        <WorkCard key={i} data={post} cl={i} />
                    </>
                )
            })
            }
            </div>
        </div>
    </>
  )
}
