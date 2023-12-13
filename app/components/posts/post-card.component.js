'use client';
import Image from "next/image";
import Link from "next/link";

import FormatDate from "@/app/functions/date-format";

import { PostCard, PostCard_Title, PostCard_Img, PostCard_Copy } from './post-card-styles'

export default function Post ( props ) {

    const { title, publish_date,  excerpt, feat_img, slug } = props;

    return (
        <>
            <PostCard>
                <PostCard_Img>
                    <Image src={feat_img} width="900" height="250" alt=""/>
                </PostCard_Img>
                <PostCard_Copy>
                    <p className="mb-2">{ FormatDate(publish_date) }</p>
                    <PostCard_Title>{ title }</PostCard_Title>
                    <div className="mt-3 mb-8" dangerouslySetInnerHTML={{ __html: excerpt }}></div>
                    <div>
                        <Link 
                            className="btn"
                            href={`/news/${slug}`}>
                            Continue reading
                        </Link>
                    </div>
                </PostCard_Copy>
            </PostCard>
        </>
    )
}