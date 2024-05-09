import '../../globals.scss';
// import styles from './work_grid.module.scss'
// import WorkCard from '@/app/components/work_tile/work_tile.component';

// export const metadata = {
//   title: 'Work',
//   description: '',
//   keywords: [''],
//   robots: {
//     index: false,
//     follow: false,
//     nocache: true,
//   },

// }

// const getData = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS_API}work`);
//   return res.json();
// }

export default  async function Page() {

//   const data = await getData();

  return (
    <>
        <div className='container header--bg mt-[8em]'>
           <h1>WORK POST</h1>
        </div>
    </>
  )
}
