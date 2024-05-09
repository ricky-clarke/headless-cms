import styles from './feature_cards.module.scss';
import Image from "next/image";
import Link from 'next/link';

export default async function FeatureCardTemplateLatest ( props ) {

    const getLatestPost = async () => {

        const query = `query latestPost($postCount: Int) {
        posts(first: $postCount) {
            nodes {
                featuredImage {
                node {
                    sourceUrl
                }
                }
                title
                slug
            }
            }
        }`
    
        const res = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS_GRAPHQL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: { postCount : 1  }
        }),
        })
        return res.json();

    }

    const getLatestWork = async () => {

        const query = `query latestWork($postCount: Int) {
            clients(first: $postCount) {
            nodes {
                featuredImage {
                node {
                    sourceUrl
                }
                }
                title
                slug
            }
            }
        }`
    
        const res = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS_GRAPHQL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: { postCount : 1  }
        }),
        })
        return res.json();

    }

    const latestWork = await getLatestWork();
    const latestPost = await getLatestPost();

    const title = props.post_type == 'post' ? latestPost.data.posts.nodes[0].title : latestWork.data.clients.nodes[0].title;
    const link = props.post_type == 'post' ? latestPost.data.posts.nodes[0].slug : latestWork.data.clients.nodes[0].slug;
    const img = props.post_type == 'post' ? latestPost.data.posts.nodes[0].featuredImage.node.sourceUrl : latestWork.data.clients.nodes[0].featuredImage.node.sourceUrl;

    
    return(
        <>
              <div className={`${styles.feature_card__img}`+ ' relative'}>
                    <Image
                    src={img}
                    width={506}
                    height={530}
                    className="feature_img"
                    alt="" />
                </div>
                <div className={`${styles.feature_card__copy}`}>
                    <h2>{ title }</h2>
                </div> 
                <Link href={link} aria-label="Read more"></Link>
        </>
    )

}