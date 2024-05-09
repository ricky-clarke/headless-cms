import PageHeader from '@/app/components/layouts/page_header/page_header.component';
import ModuleLoop from '@/app/components/module_loop/module_loop.component';
import '../globals.scss';

// Dynamic meta data
export async function generateMetadata({ params }, parent) {
  
  const slug = params.path.pop();
  const meta = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS_API}pages?slug=${slug}`).then((res) => res.json())
 
  return {
    title: meta[0]?.title.rendered,
    description: ''
  }

}

export default async function Page({ params }) {

const getData = async () => {

  const query = `query getPage($pageSlug: String!) {
    pageBy(uri: $pageSlug) {
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
      variables: { pageSlug : params.path.pop()  } // params.path.pop()  == get last array value (slug)
    }),
  })
  return res.json();

}

const data = await getData();
 const getDataPath = data.data.pageBy;
const page_id = getDataPath?.pageId;
const get_pageTitle = getDataPath?.title;
const page_header_enable = getDataPath.pageHeader?.pageHeader.pageHeader;

 return (
    <>
        {page_header_enable && <PageHeader page_id={page_id} title={get_pageTitle} /> }
        <ModuleLoop page_id={page_id} />
    </>
  )
}



