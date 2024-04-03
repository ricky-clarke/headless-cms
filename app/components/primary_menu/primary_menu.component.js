'use client'
import useSWR from 'swr';
import { useParams } from 'next/navigation'
import { useContext } from "react"
import globalContext from "@/app/context/context";
import Hamburger from '../hamburger_menu/hamburger.component';
import Link from 'next/link';
import styles from './primary_menu.module.scss'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function PrimaryMenu () {

  const params = useParams();
  const { state, dispatch } = useContext(globalContext);

  const { data: menu_items } = useSWR(`${process.env.NEXT_PUBLIC_HEADLESS}menu`, fetcher, { revalidateOnFocus: true, revalidateOnReconnect: false }
  );

  const menuStatus = state.menuOpen == true && styles.primary_menu__open;

    return (
        <>
          <div className='flex items-center justify-between relative'>
              <Hamburger />
              <nav className={`${styles.primary_menu} ${menuStatus}`} dangerouslySetInnerHTML={{__html: menu_items }}></nav>
              {/* <ul>
                {posts?.map((post, i) => {
                        return (
                            <li key={i} 
                            className={`${styles.primary_menu_item} ${params.slug == post?.slug ? styles.primary_menu_item__current : ''}`}
                            >
                              <Link id={`menu_item-${post?.ID}`} href={`${window.location.origin}/${post?.slug}`} onClick={() => {  dispatch({type:"MENUOPEN", payload: false }); }}>{post?.title}</Link>
                            </li>
                        )
                    })
                } 
                </ul> */}
              {/* </nav> */}
          </div>
        </>
    )
}