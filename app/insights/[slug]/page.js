import styles from '../insight-post.module.scss'
import Link from "next/link";
import '../../globals.scss';
// Dynamic meta data
export async function generateMetadata({ params }, parent) {
    const slug = params.slug
    const meta = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS_API}posts?slug=${slug}`).then((res) => res.json())
   
    return {
      title: meta[0].title.rendered,
      description: ''
    }
  
  }
 
export default async function SinglePost ( { params} ) {

    const getPostData = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS_API}posts?slug=${params.slug}&acf_format=standard`);
        return res.json();
      }
    
    const data = await getPostData();  

    return (
        <>
                <div className={`${styles.insight_post} container header--bg`}>
                    <div className="mt-[9em]">
                        <Link href="/insights" className={`${styles.insight_post_back} mb-[5em] inline-block`}> ALL INSIGHTS</Link>
                        <h1>{data[0]?.title.rendered}</h1>
                        <div className="md:w-3/5">
                            <div className="mt-3 mb-8" dangerouslySetInnerHTML={{ __html: data[0].excerpt.rendered }}></div>
                            <div dangerouslySetInnerHTML={{ __html: data[0]?.content.rendered }}></div>
                        </div>
                    </div>
                </div>
        </>
    )

}


