import PageHeaderCopy from './page_header_copy.component';
import styles from './page_header.module.scss'
import FiveGraphic from '@/app/assets/svgs/five';
import Script from 'next/script';
import Image from 'next/image';

export default async function PageHeader( { page_id, title }) {

    const query = `query pageHeader($pageid: Int!) {
        pages(where: {id: $pageid}) {
          nodes {
            pageHeader {
              pageHeader {
                pageHeader
                pageHeaderCopyAbove
                pageHeaderCopyBelow
                pageHeaderLink {
                  target
                  title
                  url
                }
                pageHeaderTitleOverride
                pageHeaderVideo
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
            title
          }
        }
    }`

    const res = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS_GRAPHQL}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            query,
            variables: { pageid : page_id }
         }),
    })

    const getData = await res.json();

    // Get query data
    const data = getData.data.pages.nodes[0].pageHeader.pageHeader;
    // Get video
    const { pageHeaderVideo } = data;
    // Page title
    const pageTitle = getData.data.pages.nodes[0].title;
    // Page feature image
    const pageFeatureImage = getData.data.pages.nodes[0].featuredImage?.node.sourceUrl;
    // Set page header type
    const page_header_type = pageHeaderVideo != null ? styles.page_header__video  :  pageFeatureImage ? styles.page_header__image : null;

    return (
        <>
            <section className={`${styles.page_header} relative ${page_header_type}`}>

                { pageHeaderVideo ?
                <>
                <div className={styles.page_header__video_container}>
                    <iframe src={`${pageHeaderVideo}?h=cfc02205f9?autoplay=1&loop=1&title=0&muted=1byline=0&portrait=0&background=1`} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen loading="lazy" title="video title here"></iframe>                    
                    <Script src="https://player.vimeo.com/api/player.js"></Script > 
                </div>
                <div className={styles.page_header__video_wrapper}>
                    <PageHeaderCopy data={data} title={pageTitle} />
                </div>
                <div className={styles.page_header__overlay}></div>
                </>
                : 
                
                pageFeatureImage ?
                <>
                  <Image priority src={pageFeatureImage} height={600} width={2000} alt=""/>
                  <PageHeaderCopy data={data} title={pageTitle} />
                  <div className={styles.page_header__overlay}></div>
                 </>
                :
                <>
                    <PageHeaderCopy data={data} title={pageTitle} />
                    <div className={styles.page_header__graphic}>
                      <FiveGraphic />
                  </div>
                </>
                }
            </section>
        </>
    )

}