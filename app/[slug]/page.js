import PageHeader from '@/app/components/page_header/page_header.component';
import ModuleLoop from '@/app/components/module_loop/module_loop.component';
import '../globals.scss';

// Dynamic meta data
export async function generateMetadata({ params }, parent) {
  const slug = params.slug
  const meta = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS}pages?slug=${slug}`).then((res) => res.json())
 
  return {
    title: meta[0].title.rendered,
    description: ''
  }

}

export default async function Page({ params }) {

  const getData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS}pages?slug=${params.slug}&acf_format=standard`);
    return res.json();
  }

const data = await getData();  

 return (
    <>
        <PageHeader data={data[0]?.acf?.page_header} />
        <ModuleLoop modules={data[0]} />
    </>
  )
}



