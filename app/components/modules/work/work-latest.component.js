
import WorkLoop from './work-loop.component';

export default async function WorkLatest ( data ) {

    const getWorkPosts = async () => {

        const query = `query getWork {
          clients(first: 3, where: {orderby: {field: DATE, order: ASC}}) {
                edges {
                    node {
                      featuredImage {
                        node {
                          sourceUrl
                        }
                      }
                      uri
                      title
                      slug
                      workCategories {
                        edges {
                          node {
                            uri
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
                variables: { postCount : 3  }
            }),
        })

        return res.json();

    }

    const workPosts = await getWorkPosts();

    const latestWorkPosts = workPosts.data.clients.edges;

    return (
        <>
            <WorkLoop posts={latestWorkPosts}/>
        </>
    )
}