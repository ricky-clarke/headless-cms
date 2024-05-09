import Image from "next/image";
import styles from './icons.module.scss';
import ModuleTitle from "../../module_title/module_title.component";
import Link from "next/link";

export default function Icons ( data ) {

    const { moduleSpacing, titleModuleTitle, icon } = data.data;

    const columns = data.data.iconColumns;
    const bg_color = data.data.backgroundColour;

    const grid = columns == '2' ? 'md:grid-cols-2 lg:grid-cols-2 gap-7' : 
    columns == '3' ? 'md:grid-cols-2 lg:grid-cols-3 gap-[3em]' :
     '';

     const grid_tile = columns == '2' ? 'grid' : styles.icon_tile__small;

    return (
        <>
            <section className={`${styles.module__icons} ${moduleSpacing} module bg-${bg_color}`}>
                    <div className="container">
                    <ModuleTitle mod_title={titleModuleTitle.title} mod_type={titleModuleTitle.title_type}/>
                    <div className={`${grid} grid`}>
                        {icon?.map((row, i) => {
                                return(
                                    <div key={i} className={`${styles.icon_tile} ${grid_tile}`}>
                                        {row.image && 
                                        <div className="relative">
                                            <Image
                                            width={100}
                                            height={100}
                                            src={row.image.node.sourceUrl}
                                            alt="" />
                                        </div>}
                                        <div>
                                            <h3>{row?.title}</h3>
                                            <div dangerouslySetInnerHTML={{__html: row?.copy }}></div>
                                        </div>
                                        {row.link && <Link href={row.link.url} aria-label="More information" target={row.link.target}></Link> }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}