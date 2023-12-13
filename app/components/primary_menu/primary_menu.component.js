'use client';
import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function PrimaryMenu () {

  const { data: posts } = useSWR("https://headless.granite5.com/wp-json/wp/v2/menu", fetcher, { revalidateOnFocus: false, revalidateOnReconnect: false  }
  );

  // if (error) {
  //   return <p>Failed to fetch</p>;
  // }

  // if (isLoading) {
  //   return <p>Loading</p>;
  // }

    return (
      
        <>
          <div className='flex gap-8'>
              {posts?.map((post, i) => {
                      return (
                          <Link key={i} href={post?.slug}>{post?.title}</Link>
                      )
                  })
              }
            </div>
        </>
    )
}