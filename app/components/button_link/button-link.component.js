import styles from './button-link.module.scss'

export default function ButtonLink ( props ) {

    const { url, title, link_style } = props;

    return (
        <>
          <a href={url} className={`${styles.btn} ${styles[link_style]}`}>{title}</a>
        </>
    )
}