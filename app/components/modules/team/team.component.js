'use client'
import useSWR from 'swr'
import styles from './team.module.scss'
import Image from 'next/image'
import Loading from '../../ui/loading/loading.component'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Team ( props  ) { 

    const { moduleSpacingModuleSpacing } = props.data

    const { data: users, isLoading, isError: error, } = useSWR(`${process.env.NEXT_PUBLIC_HEADLESS_API}team`, fetcher, { revalidateOnFocus: false, revalidateOnReconnect: false, revalidateIfStale: false }
    );

    if (error) {
        return <p>Failed to fetch</p>;
      }
    
      if (isLoading) {
        return <Loading />;
      }

     // Convert the array of profiles to a Map where the keys are the 'order' numbers
        const profileMap = new Map(users?.team
            .filter(profile => !profile.exclude)
            .map(profile => [profile.order, profile])
        );

    // Sort the Map based on the 'order' numbers
    const sortedProfileMap = new Map([...profileMap.entries()].sort((a, b) => a[0] - b[0]));

    return (
             <section className={`${styles.module__team} module ${moduleSpacingModuleSpacing}`}>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4'>
                    {/* // Iterate over the sorted Map to render the profiles in the desired order */}
                    {Array.from(sortedProfileMap.values()).map((profile, i) => (
                    <div key={i} className={styles.team_tile}>
                        <div className={styles.team_tile_img}>
                        <Image
                            src={profile.img}
                            width={475}
                            height={475}
                            alt={profile.first_name}
                        />
                        </div>
                        <div className={styles.team_tile_content}>
                        <h4>{profile.first_name}</h4>
                        <p>{profile.role}</p>
                        </div>
                    </div>
                    ))}
                    </div>
            </section>         
    )

}