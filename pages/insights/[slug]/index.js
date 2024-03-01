import Template from "@/app/template";
import styles from '../insight-post.module.scss'
import Link from "next/link";
import Head from "next/head";

export async function getServerSideProps(context) {
    const slug = context.query.slug;
    const res = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS}posts?slug=${slug}`);
    const data = await res.json()
    return { props: { data } }
  }

export default function SinglePost ( { data } ) {

    return (
        <>
             <Head>
                <title>{data[0]?.title.rendered}</title>
                <meta name="robots" content="noindex,nofollow" />
            </Head>
            <Template>
                <div className={`${styles.insight_post} container header--bg`}>
                    <div className="mt-[9em]">
                        <Link href="/insights" className={`${styles.insight_post_back} mb-[5em] inline-block`}> ALL INSIGHTS</Link>
                        <h1>{data[0].title.rendered}</h1>
                        <div className="md:w-3/5">
                            <div className="mt-3 mb-8" dangerouslySetInnerHTML={{ __html: data[0].excerpt.rendered }}></div>
                            <div dangerouslySetInnerHTML={{ __html: data[0]?.content.rendered }}></div>
                        </div>
                    </div>
                </div>
            </Template>
        </>
    )

}


