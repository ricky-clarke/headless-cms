'use client'
import useSWR from 'swr'
import styles from './contact-form.module.scss';
import ModuleTitle from "../module_title/module_title.component";
import Image from 'next/image';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function ContactForm ( data ) {

    const { copy, user, module_title } = data.data
    const { spacing } = data

    const { data: userMeta } = useSWR(`${process.env.NEXT_PUBLIC_HEADLESS}user_meta/${user?.ID}`, fetcher, { revalidateOnFocus: false, revalidateOnReconnect: false, revalidateIfStale: false }
    );

    return (
        <>
            <section className={`${styles.module__contact_form} module ${spacing}`}>
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-[15em]">
                        <div>
                            <ModuleTitle mod_title={module_title.title} mod_type={module_title.title_type}/>
                            <div dangerouslySetInnerHTML={{__html: copy }}></div>
                            <div className={styles.contact_user}>
                                {userMeta?.user_image &&
                                <div className='w-[100px]'>
                                    <Image 
                                    src={userMeta.user_image}
                                    width={150}
                                    height={150}
                                    alt={user.user_firstname}
                                    />
                                </div>
                                }
                                <div>
                                    <h3>{user?.user_firstname}</h3>
                                    {userMeta?.user_role && <p className='mb-0'>{userMeta.user_role}</p>}
                                </div>
                            </div>
                        </div>
                        <div>
                            FORM
                        </div>
                    </div>
                    </div>
                    <div className={styles.contact__graphic}>
                        <Image
                        src="/logo-5-white.svg"
                        width={275}
                        height={410}
                        alt="" />
                    </div>
            </section>
        </>
    )
}