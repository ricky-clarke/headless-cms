import Head from 'next/head';
import PageHeader from '@/app/components/page_header/page_header.component';
import '../styles/globals.scss'
import Template from '@/app/template';
import ModuleLoop from '@/app/components/module_loop/module_loop.component';

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS}pages?slug=home&acf_format=standard`)
  const data = await res.json()
  return { props: { data } }
}
 
export default  function Page({ data }) {

  return (
    <>
     <Head>
        <title>Web Design Cambridge | Digital Marketing & Website Development | Granite 5</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Template>
        <PageHeader data={data[0].acf.page_header} display_type="home_page" />
          <ModuleLoop modules={data[0]} />
        </Template>
  </>
  )
}
