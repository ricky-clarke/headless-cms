'use client'
import { useEffect, useState } from "react";
import styles from '../footer_widget/footer-widget.module.scss'

export default function FooterWidget ( props )  {

    const {widget_id} = props;

    const [widget, getWidget] = useState([]);

    useEffect(() => {

    const fetchData = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS}widgets?sidebar=${widget_id}`);
            const get_widget = await response.json();
            getWidget(get_widget);
        } catch (error) {
        console.log(error)
        }
    };

    fetchData();

    }, [widget_id]);

    return (
        <>
            <div id={widget[0]?.id} className={styles.footer_widget}>
                <div dangerouslySetInnerHTML={{__html: widget[0]?.rendered }}></div>
            </div>
        </>
    )

}