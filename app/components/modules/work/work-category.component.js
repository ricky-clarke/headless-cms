
import styles from './work.module.scss'
import Image from 'next/image'
import Link from 'next/link'


export default async function WorkCategory( data ) {

    const getWorkPosts = async () => {

        const query = `query workTaxonomy {
            workCategories(where: {termTaxonomId: "9"}) {
              nodes {
                id
                name
                clients(first: 3) {
                  nodes {
                    id
                    title
                    uri
                    featuredImage {
                        node {
                          sourceUrl
                        }
                      }
                  }
                }
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
                variables: { taxID : data.data  }
            }),
        })

        return res.json();

    }

    const workPosts = await getWorkPosts();
    const posts = workPosts.data.workCategories.nodes[0].clients.nodes;

    return (
        <>
         {posts?.map((row, i) => {
                return(
                    <>
                        <div key={i} className={`${styles.work_tile} ${styles[`work_tile__${i}`]}`}>
                            <div className={styles.work_tile__img}>
                                <Image src={row.featuredImage.node.sourceUrl} alt="" height={715} width={585} />
                            </div>
                            <div className={`${styles.work_tile__copy} md:col-11`}>
                                <h3 className='uppercase m-0 text-white'>{row.title}</h3>
                            </div>
                            <Link href={row.uri}></Link>
                        </div>
                    </>
                ) 
            })}
        </>
    )
}