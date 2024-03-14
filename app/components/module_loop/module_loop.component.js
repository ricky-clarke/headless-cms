import Icons from '@/app/components/icons/icons.component';
import FeatureCards from '@/app/components/feature_cards/feature-cards.component';
import VideoModule from '@/app/components/video-module/video-module.component';
import Testimonials from '@/app/components/testimonials/testimonials.component';
import ContactForm from '@/app/components/contact_form/contact-form.component';
import Text from '@/app/components/text/text.component';
import Team from '../team/team.component';
import ImageCards from '../image_cards/image-cards.component';

export default function ModuleLoop ( props ) {

    const { modules } = props;

    return (
        <>
         {modules?.acf?.modules &&modules?.acf?.modules?.map((row, i) => {
                return(
                        <div key={i}>

                            {row.acf_fc_layout == 'feature_cards' && 
                            <FeatureCards data={row?.feat_cards} spacing={row?.module_spacing} /> }

                            {row.acf_fc_layout == 'icon' &&
                            <Icons module_title={row?.module_title} data={row?.icon} spacing={row?.module_spacing} /> }

                            {row.acf_fc_layout == 'text' && 
                            <Text data={row} spacing={row?.module_spacing}/> }

                            {row.acf_fc_layout == 'video' && 
                            <VideoModule data={row?.video_url } module_title={row?.module_title} spacing={row?.module_spacing} bg={row?.module_bg} /> }

                            {row.acf_fc_layout == 'testimonials' && 
                            <Testimonials spacing={row?.module_spacing} /> }
                            
                            {row.acf_fc_layout == 'contact_form' && 
                            <ContactForm data={row} module_title={row?.module_title} spacing={row?.module_spacing} 
                            form_id={row?.form_id} /> }

                            {row.acf_fc_layout == 'team' && 
                            <Team data={row} spacing={row?.module_spacing} /> }
                            
                            {row.acf_fc_layout == 'image_cards' && 
                            <ImageCards data={row.image_cards} spacing={row?.module_spacing} /> }

                        </div>
                )
            })
         }
        </>
    )
}