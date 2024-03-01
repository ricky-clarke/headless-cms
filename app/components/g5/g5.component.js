'use client';
import useSWR from 'swr';
import Loading from '../loading/loading.component';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function G5 () {

  const { data: posts, isLoading, isError: error, } = useSWR("https://www.granite5.com/wp-json/wp/v2/pages?slug=home", fetcher, { revalidateOnFocus: false, revalidateOnReconnect: false, revalidateIfStale: false }
);

  if (error) {
    return <p>Failed to fetch</p>
  }

  if (isLoading) {
    return <Loading />
  }

    return (
        <>
          <div dangerouslySetInnerHTML={{__html: posts[0].content?.rendered }}></div>
        </>
    )
}