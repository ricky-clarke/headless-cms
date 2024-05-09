import PageHeader from '@/app/components/layouts/page_header/page_header.component';
import ModuleLoop from '@/app/components/module_loop/module_loop.component';
import './globals.scss';

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

export default async function Page({ params }) {

  const getData = async () => {
  
    const query = `query getFrontPage {
      pageBy(uri: "/") {
        title
        pageId
        pageHeader {
          pageHeader {
            pageHeader
          }
        }
      }
    }`
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS_GRAPHQL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 },
      body: JSON.stringify({
        query,
      }),
    })
    return res.json();
  
  }
  
  const getPage = await getData();
  const getDataPath = getPage.data.pageBy;
  const page_id = getDataPath.pageId;
  const get_pageTitle = getDataPath.title;
  const page_header_enable = getDataPath.pageHeader?.pageHeader.pageHeader;

  return (
    <>
      {page_header_enable && <PageHeader page_id={page_id} title={get_pageTitle} /> }
        <ModuleLoop page_id={page_id} />
    </>
  )
}
