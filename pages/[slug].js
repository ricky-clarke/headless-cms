import '../styles/globals.scss'
import PageHeader from '@/app/components/page_header/page_header.component';
import ModuleLoop from '@/app/components/module_loop/module_loop.component';
import Template from '@/app/template';
import Head from 'next/head';

export async function getServerSideProps(context) {
  const slug = context.query.slug;
  const res = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS}pages?slug=${slug}&acf_format=standard`);
  const data = await res.json()
  return { props: { data } }
}

export default  function Page({ data }) {

  return (
    <>
      <Head>
          <title>{data[0]?.title.rendered}</title>
          <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Template>
          <PageHeader data={data[0]?.acf?.page_header} />
          <ModuleLoop modules={data[0]} />
      </Template>
    </>
  )
}


