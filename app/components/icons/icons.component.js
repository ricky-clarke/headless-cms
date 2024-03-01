import Image from "next/image";
import styles from './icons.module.scss';
import { DM_Sans } from 'next/font/google';
import ModuleTitle from "../module_title/module_title.component";
const dm_sans = DM_Sans({ subsets: ['latin'], weight: '500' })

export default function Icons ( props ) {

    const { data, module_title, spacing } = props;

    return (
        <>
            <section className={`${styles.module__icons} ${spacing} module`}>
                    <div className="container">
                    <ModuleTitle mod_title={module_title.title} mod_type={module_title.title_type}/>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-7">
                    {data?.map((row, i) => {
                            return(
                                <div key={i} className={`${styles.icon_tile} grid`}>
                                    {row.image && 
                                    <div className="relative">
                                        <Image
                                        width={100}
                                        height={100}
                                        src={row.image.url}
                                        alt="" />
                                    </div>}
                                    <div>
                                        <h3 className={dm_sans.className}>{row.title}</h3>
                                    </div>
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