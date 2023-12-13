import Template from "@/app/template";
import FormatDate from "@/app/functions/date-format";
import '../../app/globals.css';
import '../../app/_src/styles/single-post.css';

export async function getServerSideProps(context) {

    const slug = context.query.slug;

    const res = await fetch(`https://headless.granite5.com/wp-json/wp/v2/posts?slug=${slug}`);
  
    const data = await res.json()
   
    return { props: { data } }

  }

export default function SinglePost ( { data } ) {

    return (
        <>
            <Template>
            <div className="container">
                <p>{FormatDate(data[0].date)}</p>
                <h1>{data[0].title.rendered}</h1>
                <div className="md:w-3/5">
                    <div className="mt-3 mb-8" dangerouslySetInnerHTML={{ __html: data[0].excerpt.rendered }}></div>
                    <div dangerouslySetInnerHTML={{ __html: data[0]?.content.rendered }}></div>
                </div>
                
            </div>
            </Template>
        </>
    )

}


