'use client';
import useSWR from 'swr'
import Post from "./post-card.component";
import Loading from '../loading/loading.component';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function PostList () {

    const { data: posts, isLoading, isError: error, } = useSWR("https://headless.granite5.com/wp-json/wp/v2/posts", fetcher, { revalidateOnFocus: false, revalidateOnReconnect: false, revalidateIfStale: false }
      );

      if (error) {
        return <p>Failed to fetch</p>;
      }
    
      if (isLoading) {
        return <Loading />;
      }

    return (
        <>
          <div>
              {posts?.map((post, i) => {
                      return (
                          <Post
                          key={i} 
                          title={post?.title.rendered}
                          slug={post?.slug} 
                          excerpt={post?.excerpt.rendered} 
                          feat_img={post?.fimg_url} 
                          publish_date={post?.date} />
                      )
                  })
              }
              
          </div>
        </>
    )
}