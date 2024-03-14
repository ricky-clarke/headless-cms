import '../globals.scss';
import FeaturedInsight from '@/app/components/featured_insight/featured_insight.component';
import Card from '@/app/components/card/card.component';

export const metadata = {
  title: 'Insights',
  description: '',
  keywords: [''],
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },

}

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS}posts`);
  return res.json();
}

export default  async function Page() {

  const data = await getData();

  return (
    <> 
      <div>
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
        </div>
    </>
  )
}
