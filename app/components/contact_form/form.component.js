'use client'
import { useState } from 'react';
import useSWR from 'swr'
// import Loading from '../loading/loading.component';
import styles from './contact-form.module.scss'

const fetcher = async (url) => {

    const headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(process.env.NEXT_PUBLIC_HEADLESS_FORM_USERNAME + ':' + process.env.NEXT_PUBLIC_HEADLESS_FORM_PASSWORD));
  
    const response = await fetch(url, {
      headers: headers,
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    return response.json();
};

export default function Form (props) {

  const { formID } = props

    // Get the form from WP
    const { data: posts, isLoading, isError: error, } = useSWR(`https://headless.granite5.com/wp-json/gf/v2/forms/1`, 
        fetcher, {
             revalidateOnFocus: false, 
             revalidateOnReconnect: true, 
             revalidateIfStale: true
            }
    );

    // if (error) {
    //     return <p>Failed to fetch</p>;
    //   }
     
    //   if (isLoading) {
    //     return <Loading />;
    //   }


    const [formData, setFormData] = useState({})

    // Add input value to state on
    const formField = (event) => {

      const { name, value } = event.target;

      setFormData((prevData) => ({
        ...prevData,
         [name] : value
    }));

    };


    const [messageNotice, setMessageNotice] = useState()


    // On submit, push data to api route
    async function onSubmit(event) {

      event.preventDefault()

      const response = await fetch('/api/form-submit', {
        method: 'POST',
        body: JSON.stringify(formData),
        }
    )

    const data = await response.json()

    setMessageNotice(data.confirmation_message)

    console.log(data)

    }

    return (
        <>
        
        {messageNotice ?
          <div className={styles.contact_notice} dangerouslySetInnerHTML={{__html: messageNotice }}></div>
        :
          <form className={styles.gravity_form} onSubmit={onSubmit}>

                {posts && posts?.fields?.map((post, i) => {
                    return(
                        <>
                          <div key={i}>
                                {(() => {
                                    switch(post.type) {
                                        case "textarea":
                                            return <div className={styles.gravity_form_field}>
                                              <label>{post.label} {post.isRequired == true && '*'}</label>
                                              <textarea name={`input_${post.id}`} onChange={formField} /></div>;
                                        default :
                                        return <div className={styles.gravity_form_field}>
                                              <label>{post.label} {post.isRequired == true && '*'}</label>
                                              <input 
                                              type={post.type} 
                                              name={`input_${post.id}`}
                                               onChange={formField}
                                               required={post.isRequired == true && 'required'}
                                               placeholder={post.placeholder && post.placeholder }
                                               />
                                            </div>;
                                    }
                                })()}
                                </div>
                        </>
                    )
                })
                }
                <button type="submit" className="btn bg-secondary mb-10">{posts?.button?.text}</button>
          </form>
}
        </>
    )
}