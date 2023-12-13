import Template from "@/app/template";
// import FormatDate from "@/app/functions/date-format";
import '../app/globals.css';
// import '../../app/_src/styles/single-post.css';

export async function getServerSideProps(context) {

    const slug = context.query.slug;

    const res = await fetch(`https://headless.granite5.com/wp-json/wp/v2/pages?slug=${slug}`);
  
    const data = await res.json()
   
    return { props: { data } }

  }

export default function SinglePost ( { data } ) {

    const this_test = data[0];

    return (
        <>
            <Template>
            <div className="container">
                 <h1 dangerouslySetInnerHTML={{ __html: this_test?.title.rendered }}></h1>    
                 <div className="mt-3 mb-8" dangerouslySetInnerHTML={{ __html: this_test?.content.rendered }}></div>

                 <p><b>{this_test?.acf.copy}</b></p>

                 {this_test?.acf.repeater &&

                    <div>

                    {this_test?.acf.repeater.map((row, i) => {
                        return (
                        <div key={i} className="mb-5">
                            <h3><b>{row.title}</b></h3>
                            <p>{row.copy}</p>
                        </div>
                        )
                    })}
                    </div>
            }

            </div>
            </Template>
        </>
    )

}


