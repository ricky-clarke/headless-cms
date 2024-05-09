'use client'
import useSWR from 'swr'
import styles from './contact-form.module.scss';
import ModuleTitle from "../../module_title/module_title.component";
import Image from 'next/image';
import Form from './form.component';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function ContactForm ( { data } ) {

    const { copy, user, formId, moduleSpacing, moduleTitle } = data

    // Get the user
    const { data: userMeta } = useSWR(`${process.env.NEXT_PUBLIC_HEADLESS_API}user_meta/7`, fetcher, { revalidateOnFocus: false, revalidateOnReconnect: false, revalidateIfStale: false }
    );

    return (
        <>
            <section className={`${styles.module__contact_form} module ${moduleSpacing}`}>
                <div className={`${styles.contact_container} container`}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-[2em] lg:gap-[12em]">
                        <div>
                            <ModuleTitle mod_title={moduleTitle.title} mod_type={moduleTitle.titleType}/>
                            <div dangerouslySetInnerHTML={{__html: copy }}></div>
                            <div className={styles.contact_user}>
                                {userMeta?.user_image &&
                                <div className='w-[100px]'>
                                    <Image 
                                    src={process.env.NEXT_PUBLIC_HEADLESS_BASE+userMeta.user_image}
                                    width={150}
                                    height={150}
                                    alt={userMeta.user_name}
                                    />
                                </div>
                                }
                                <div>
                                    <h3>{userMeta?.user_name}</h3>
                                    {userMeta?.user_role && <p className='mb-0'>{userMeta.user_role}</p>}
                                </div>
                            </div>
                        </div>
                        <div>
                        {/* <Form formID={formId} /> */}
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