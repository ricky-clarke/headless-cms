'use client'
import useSWR from 'swr';
import Link from 'next/link';
import styles from './primary_menu.module.scss'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function PrimaryMenu () {

  const { data: posts } = useSWR(`${process.env.NEXT_PUBLIC_HEADLESS}menu`, fetcher, { revalidateOnFocus: true, revalidateOnReconnect: false  }
  );

    return (

        <>
        {/* <div className={styles.primary_menu} dangerouslySetInnerHTML={{__html: posts }}></div> */}
          <nav className={styles.primary_menu}>
            <ul>
               {posts?.map((post, i) => {
                      return (
                          <li key={i} ><Link href={"/" + post?.slug}>{post?.title}</Link></li>
                      )
                  })
              } 
              </ul>
            </nav>
        </>
    )
}