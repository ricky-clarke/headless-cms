import styles from './feature_cards.module.scss';

import FeatureCardTemplate from './feature-card-template';
import FeatureCardTemplateLatest from './feature-card-template-latest';

export default async function FeatureCard ( props ) {

    const { count, content_type, custom_info, post_info, work_info } = props;

    const { title, img, link } = custom_info
    const { cpt_p, which_post_post, selected_post } = post_info
    const { cpt_w, which_work_post, selected_work } = work_info

    return (
        <>
            <div className={`relative ${styles.feature_card} ${styles[`feature_card${count}`]}`}>
                
                { content_type == 'custom' && (
                <>
                    <FeatureCardTemplate 
                    title = {title}
                    link = {link.url}
                    img_url = {img} />
                </>
                ) }

                { cpt_p == 'post' && which_post_post == 'select' && selected_post &&
                <>
                    <FeatureCardTemplate 
                    title = {post_info.selected_post.edges[0].node.title}
                    link = {post_info.selected_post.edges[0].node.uri}
                    img_url = {post_info.selected_post?.edges[0].node.featuredImage.node.sourceUrl}
                   />
                </>
                }

                { cpt_p == 'post' && which_post_post == 'latest' &&
                <>
                    <FeatureCardTemplateLatest post_type="post"/>
                </>
                }

            { cpt_w == 'work' &&  which_work_post == 'select' && selected_work &&
                <>
                    <FeatureCardTemplate 
                    title = {work_info.selected_work.edges[0].node.title}
                    link = {work_info.selected_work.edges[0].node.uri}
                    img_url = {work_info.selected_work?.edges[0].node.featuredImage.node.sourceUrl} />
                </>
            }

             { cpt_w == 'work' && which_work_post == 'latest' &&
                <>
                  <FeatureCardTemplateLatest post_type="work"/>
                </>
                }
            </div> 

        </>
    )
}