import Head from 'next/head';
import '../../styles/globals.scss'
import Template from '@/app/template';
import FeaturedInsight from '@/app/components/featured_insight/featured_insight.component';
import Card from '@/app/components/card/card.component';

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS}posts`)
  const data = await res.json()
  return { props: { data } }
}
 
export default  function Page({ data }) {

  console.log(data)

  return (
    <>
      <Head>
          <title>Insights</title>
          <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Template>
            <FeaturedInsight />
            <div className='container'>
                <div className='my-[4em]'> 
                    <p className='m-0'>SHOWING {data.length} of {data.length} RESULTS</p>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-[2em] mb-10'>
                {data && data?.map((post, i) => {
                    return(
                        <>
                            <Card key={i} 
                            title={post?.title?.rendered}
                            feat_img={post?.fimg_url} 
                            excerpt={post?.excerpt?.rendered}
                            link={`/insights/${post?.slug}`}
                            link_text="READ MORE"
                            />
                        </>
                    )
                })
                }
                </div>
            </div>
      </Template>
    </>
  )
}
