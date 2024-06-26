'use client'
import { useState, useEffect } from "react";
import styles from './testimonials.module.scss';
import QuoteGraphic from "@/app/assets/svgs/quote";

export default function Testimonials ( { data } ) {

    const { spacingModuleSpacing } = data;

    const [testimonial, getTestimonial] = useState([]);

    useEffect(() => {

    const fetchData = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS_API}testimonials?per_page=1&orderby=date`);
            const get_testimonial = await response.json();
            getTestimonial(get_testimonial);
        } catch (error) {
        console.log(error)
        }
    };

    fetchData();

    }, []);

    return (
        <>
            <section className={`${styles.module__testimonials} ${spacingModuleSpacing} module`}>
                <div className="container">
                    <div className={`${styles.testimonial_container} bg-secondary`}>
                        {testimonial && testimonial?.map((post, i) => {
                                    return(
                                        <div key={i} className="testimonial__container position-relative">
                                        <div className={styles.testimonial}>
                                            <div className={styles.testimonial__graphic}><QuoteGraphic /></div>
                                            <div className={styles.testimonial__wrap}>
                                                <div className={styles.testimonial__copy}><p>{post?.acf?.testimonial}</p></div>
                                                <p className={styles.testimonial__author}>{post?.title?.rendered} </p>
                                            </div>
                                        </div>
                                    </div>
                                    ) })
                            }
                    </div>
                </div>
            </section>
        </>
    )
}