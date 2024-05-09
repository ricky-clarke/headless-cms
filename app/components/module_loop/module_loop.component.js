import Icons from '@/app/components/modules/icons/icons.component';
import FeatureCards from '@/app/components/modules/feature_cards/feature-cards.component';
import VideoModule from '@/app/components/modules/video-module/video-module.component';
import Testimonials from '@/app/components/modules/testimonials/testimonials.component';
import ContactForm from '@/app/components/modules/contact_form/contact-form.component';
import Text from '@/app/components/modules/text/text.component';
import Team from '../modules/team/team.component';
import ImageCards from '../modules/image_cards/image-cards.component';
import Work from '../modules/work/work.component';
import LargeImage from '../modules/large_image/large_image.component';

export default async function ModuleLoop ( props ) {

    const { page_id } = props;

    const getData = async () => {
  
        // Query to get all modules
        const query = `query modules($pageSlug: Int) {
            pages(where: {id: $pageSlug} ) {
                edges {
                    node {
                      pageId
                      title
                      uri
                      modules {
                        modules {
                          ... on ModulesModulesFeatureCardsLayout {
                            fieldGroupName
                            moduleSpacingModuleSpacing
                            featureCards {
                              featCpt
                              contentType
                              featCptPage {
                                edges {
                                  node {
                                    uri
                                  }
                                }
                              }
                              featCptPost {
                                edges {
                                  node {
                                    uri
                                    ... on Post {
                                      postId
                                      title
                                      featuredImage {
                                        node {
                                          sourceUrl
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              featCptWhichPost
                              featCptWork {
                                edges {
                                  node {
                                    uri
                                    ... on Work {
                                      title
                                      uri
                                      workId
                                      featuredImage {
                                        node {
                                          sourceUrl
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              copy
                              title
                              image {
                                node {
                                  sourceUrl
                                }
                              }
                              link {
                                title
                                target
                                url
                              }
                              featCptWhichWork
                            }
                          }
                          ... on ModulesModulesIconLayout {
                            fieldGroupName
                            titleModuleTitle {
                              title
                              titleType
                            }
                            icon {
                              copy
                              title
                              image {
                                node {
                                  sourceUrl
                                }
                              }
                              link {
                                title
                                url
                                target
                              }
                            }
                            iconColumns
                            moduleSpacing
                            backgroundColour
                          }
                          ... on ModulesModulesTestimonialsLayout {
                            fieldGroupName
                            spacingModuleSpacing
                          }
                          ... on ModulesModulesVideoLayout {
                            fieldGroupName
                            moduleBgModuleBg
                            videoLink {
                              target
                              title
                              url
                            }
                            videoUrl
                            moduleTitle {
                              title
                              titleType
                            }
                            moduleSpacing
                            backgroundColourType
                          }
                          ... on ModulesModulesContactFormLayout {
                            copy
                            fieldGroupName
                            formId
                            moduleTitle {
                              title
                              titleType
                            }
                            moduleSpacing
                          }
                          ... on ModulesModulesTextLayout {
                            fieldGroupName
                            moduleSpacing
                            textColumnOne
                            textColumnTwo
                            textNumberColumns
                            link {
                              target
                              title
                              url
                            }
                            linkTwo {
                              target
                              title
                              url
                            }
                          }
                          ... on ModulesModulesTeamLayout {
                            fieldGroupName
                            moduleSpacing
                          }
                          ... on ModulesModulesImageCardsLayout {
                            fieldGroupName
                            moduleSpacing
                            imageCards {
                              copy
                              title
                              link {
                                target
                                title
                                url
                              }
                              image {
                                node {
                                  sourceUrl
                                }
                              }
                            }
                          }
                          ... on ModulesModulesWorkLayout {
                            display
                            fieldGroupName
                            moduleSpacing
                            posts {
                              edges {
                                node {
                                  ... on Work {
                                    id
                                    title
                                    uri
                                    featuredImage {
                                      node {
                                        sourceUrl
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            workCategory {
                              nodes {
                                termTaxonomyId
                              }
                            }
                          }
                          ... on ModulesModulesLargeImageLayout {
                            enableContent
                            fieldGroupName
                            imageContainerWidth
                            moduleSpacing
                            image {
                              image {
                                node {
                                  sourceUrl
                                  altText
                                  srcSet(size: LARGE)
                                }
                              }
                            }
                            largeImageContent
                            largeImageContentLink {
                              target
                              title
                              url
                            }
                          }
                        }
                      }
                    }
                  }
      
          }
        }`
      
        // Fetch modules from page
        const res = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS_GRAPHQL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query,
            variables: { pageSlug : page_id  }
          }),
        })

        return res.json();
      
    }

    const getModules = await getData();

    const modules = getModules.data.pages.edges[0].node.modules.modules;

    return (
        <>
            {modules?.map((row, i) => {
                return(
                      <div key={i}>
                            
                            {row.fieldGroupName == 'ModulesModulesTextLayout' && <Text data={row} /> }

                            {row.fieldGroupName == 'ModulesModulesContactFormLayout' && <ContactForm data={row} />}

                            {row.fieldGroupName == 'ModulesModulesFeatureCardsLayout' && <FeatureCards data={row} /> }
                            
                            {row.fieldGroupName == 'ModulesModulesTeamLayout' && <Team data={row} /> }
                            
                            {row.fieldGroupName == 'ModulesModulesImageCardsLayout' && <ImageCards data={row} /> }
                            
                            {row.fieldGroupName == 'ModulesModulesVideoLayout' && <VideoModule data={row} />}
                            
                            {row.fieldGroupName == 'ModulesModulesTestimonialsLayout' && <Testimonials data={row} /> }                    

                            {row.fieldGroupName == 'ModulesModulesWorkLayout' && <Work data={row} /> }
                             
                            {row.fieldGroupName == 'ModulesModulesIconLayout' && <Icons data={row} /> }

                            {row.fieldGroupName == 'ModulesModulesLargeImageLayout' && <LargeImage data={row} /> }
                            
                      </div>
                )
            })
            }
        </>
    )
}