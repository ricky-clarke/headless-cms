'use client'
import useSWR from 'swr'
import styles from './featured_insight.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import Loading from '../loading/loading.component';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function FeaturedInsight () {

   const { data: posts, isLoading, isError: error, } = useSWR(`${process.env.NEXT_PUBLIC_HEADLESS}acf-options`, fetcher, { revalidateOnFocus: false, revalidateOnReconnect: false, revalidateIfStale: false }
   );

   if (error) {
    return <p>Failed to fetch</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

    return (
        
        <>
            <section className={`${styles.featured_insight} flex items-end lg:pb-[5em]`}>
            <div className='container relative z-10'>
                <div className='flex flex-col md:flex-row justify-between md:items-end'>
                    <div className='md:w-3/5'>
                      <p className={`${styles.featured_insight_sub} lime_green`}>FEATURED INSIGHT</p>
                      <h1>{posts.featured_listing[0].post_title}</h1>
                      <p className={styles.featured_insight_copy}>{posts.featured_listing[0].post_excerpt}</p>
                    </div>
                    <div className='mt-4 lg:mt-0'><Link className={styles.featured_insight_link} href={`insights/${posts.featured_listing[0].post_name}`}>FIND OUT MORE</Link></div>
                </div>
            </div>
            <Image className={styles.featured_insight_img} src={posts.featured_listing_img} height={750} width={2000} alt={''} priority /> 
            <div className={styles.featured_insight_overlay}></div>

          </section> 

        </>
    )
}