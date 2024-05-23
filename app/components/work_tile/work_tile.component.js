import styles from './work_tile.module.scss'
import Image from 'next/image';
import Link from 'next/link';

export default function WorkCard ( props ) {

     const {  title, fimg_url  } = props.data;

    return (
        <>
          <div className={`${styles.work_tile} ${styles[`work_tile_${props.cl}`]}`}>
            <div className={styles.work_tile_img}>
                <Image src={fimg_url}
                    width={830}
                    height={540} 
                    alt=""/>
            </div>
            <div className={styles.work_tile_copy}>
                <h3 dangerouslySetInnerHTML={{__html: title.rendered }}></h3>
            </div>
            <div className={`${styles.work_tile_arrow} hidden md:block`}>
              <Image
              src="/green-arrow.svg"
              alt=""
              height={20}
              width={20} />
            </div>
            <div className="work_tile__overlay d-lg-none"></div>
            <Link href="" className="overlay" aria-label="View case study"></Link>
            {/* <a className="overlay" href="#" aria-label="Read more"></a> */}
          </div>
        </>
    )
}