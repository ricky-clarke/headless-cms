import styles from './work_tile.module.scss'
import Image from 'next/image';

export default function WorkCard ( props ) {

     const {  title, fimg_url  } = props.data;

     console.log(props.data)

    return (
        <>
          <div className={`${styles.work_tile} ${styles[`work_tile_${props.cl}`]}`}>
            <div class={styles.work_tile_img}>
                <Image src={fimg_url}
                    width={830}
                    height={540} 
                    alt=""/>
            </div>
            <div class={styles.work_tile_copy}>
                <h3 dangerouslySetInnerHTML={{__html: title.rendered }}></h3>
            </div>
            <div class={`${styles.work_tile_arrow} hidden md:block`}>
              <Image
              src="/green-arrow.svg"
              alt=""
              height={20}
              width={20} />
            </div>
            <div class="work_tile__overlay d-lg-none"></div>
            <a class="overlay" href="#" aria-label="Read more"></a>
          </div>
        </>
    )
}