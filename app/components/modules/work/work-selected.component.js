

import styles from './work.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function WorkSelected ( data ) {

    return (
        <>
            {data.data?.map((row, i) => {
                return(
                    <>
                        <div key={i} className={`${styles.work_tile} ${styles[`work_tile__${i}`]}`}>
                            <div className={styles.work_tile__img}>
                                <Image src={row.node.featuredImage.node.sourceUrl} alt="" height={715} width={585} />
                            </div>
                            <div className={`${styles.work_tile__copy} md:col-11`}>
                                <h3 className='uppercase m-0 text-white'>{row.node.title}</h3>
                            </div>
                            <Link href={row.node.uri}></Link>
                        </div>
                    </>
                ) 
            })}

        </>
    )
}