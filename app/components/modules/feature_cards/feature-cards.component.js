import FeatureCard from "./feature-card.component";

export default function FeatureCards( data ) {

 const { moduleSpacingModuleSpacing, featureCards } = data.data;

  return (
    <>
      <section className={`module__feature_cards module ${moduleSpacingModuleSpacing}`}>
        <div className="grid sm:grid-cols-2 md:grid-cols-6">
          {featureCards?.map((row, i) => { 
              return (
                <FeatureCard
                  key={i}
                  count={i}
                  content_type = {row.contentType}
                  cpt_type = {row.featCpt}
                  custom_info = {{ 'title' : row.title, 'img' : row?.image?.node?.sourceUrl, 'link' : row?.link }}
                  post_info = {{'cpt_p' : row.featCpt, 'which_post_post' : row?.featCptWhichPost, 'selected_post' : row?.featCptPost}}
                  work_info = {{'cpt_w' : row.featCpt, 'which_work_post' : row?.featCptWhichWork, 'selected_work' : row?.featCptWork}}
                />
              );
          })}
        </div>
      </section>
    </>
  );
}
