'use client'
import useSWR from 'swr';
import Head from 'next/head';
import PageHeader from '@/app/components/page_header/page_header.component';
import ModuleLoop from '@/app/components/module_loop/module_loop.component';
import Loading from '../components/loading/loading.component';
import '../../styles/globals.scss'

const fetcher = async (url) => {
  const res = await fetch(url);
  return res.json();
};

export default function Page( data ) {

  const { data: getData, isLoading, isError: error, } = useSWR(`${process.env.NEXT_PUBLIC_HEADLESS}pages?slug=${data.params.slug}&acf_format=standard`, fetcher, { revalidateOnFocus: false, revalidateOnReconnect: false, revalidateIfStale: false }
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
          <title>{getData[0]?.title?.rendered}</title>
          <meta name="robots" content="noindex,nofollow" />
      </Head>
        <PageHeader data={getData[0]?.acf?.page_header} />
        <ModuleLoop modules={getData[0]} />
    </>
  )
}



