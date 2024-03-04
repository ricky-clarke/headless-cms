'use client'
import useSWR from 'swr';
import styles from '../insight-post.module.scss'
import Link from "next/link";
import Head from "next/head";
import Loading from '@/app/components/loading/loading.component';

const fetcher = async (url) => {
    const res = await fetch(url);
    return res.json();
  };
  
export default function SinglePost ( data ) {

    const { data: getData, isLoading, isError: error, } = useSWR(`${process.env.NEXT_PUBLIC_HEADLESS}posts?slug=${data.params.slug}`, fetcher, { revalidateOnFocus: false, revalidateOnReconnect: false, revalidateIfStale: false }
    );

    if (error) {
        return <p>Failed to fetch</p>;
      }
     
      if (isLoading) {
        return <Loading />;
      }

    return (
        <>
             <Head>
                <title>{getData[0]?.title.rendered}</title>
                <meta name="robots" content="noindex,nofollow" />
            </Head>
                <div className={`${styles.insight_post} container header--bg`}>
                    <div className="mt-[9em]">
                        <Link href="/insights" className={`${styles.insight_post_back} mb-[5em] inline-block`}> ALL INSIGHTS</Link>
                        <h1>{getData[0].title.rendered}</h1>
                        <div className="md:w-3/5">
                            <div className="mt-3 mb-8" dangerouslySetInnerHTML={{ __html: getData[0].excerpt.rendered }}></div>
                            <div dangerouslySetInnerHTML={{ __html: getData[0]?.content.rendered }}></div>
                        </div>
                    </div>
                </div>
        </>
    )

}


