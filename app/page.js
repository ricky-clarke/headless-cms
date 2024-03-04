import PageHeader from '@/app/components/page_header/page_header.component';
import '../styles/globals.scss'
import ModuleLoop from '@/app/components/module_loop/module_loop.component';

export const metadata = {
  title: 'Web Design Cambridge | Digital Marketing & Website Development | Granite 5',
  description: 'Cambridge based Granite 5 is a web design & digital marketing agency. We are proud of our reputation for reliability & for crafting beautiful websites that work.',
  keywords: [''],
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },

}

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS}pages?slug=home&acf_format=standard`);
  return res.json();
}
 
export default async function Page() {

  const data = await getData();

  return (
    <>
      <PageHeader data={data[0].acf.page_header} display_type="home_page" />
      <ModuleLoop modules={data[0]} /> 
  </>
  )
}
