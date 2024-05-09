'use client'
import { useState } from 'react';
import useSWR from 'swr'
import styles from './contact-form.module.scss'
import '../../ui/button_link/button-link.module.scss'

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
    const { data: form, isLoading, isError: error, } = useSWR(`${process.env.NEXT_PUBLIC_HEADLESS_FORM}${formID}`, 
        fetcher, {
             revalidateOnFocus: false, 
             revalidateOnReconnect: true, 
             revalidateIfStale: true
            }
    );

    const [formData, setFormData] = useState({})

    // Add input value to state on
    const formField = (event) => {

      const { name, value } = event.target;

      setFormData((prevData) => ({
        ...prevData,
        'formID' : formID,
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

    }

    return (
        <>
        
        {/* {messageNotice ?
          <div className={styles.contact_notice} dangerouslySetInnerHTML={{__html: messageNotice }}></div>
        :
          <form className={styles.gravity_form} onSubmit={onSubmit}>

                {form && form?.fields?.map((field, i) => {
                    return(
                        <>
                          <div key={i}>
                                {(() => {
                                    switch(field.type) {
                                        case "textarea":
                                            return <div className={styles.gravity_form_field}>
                                              <label>{field.label} {field.isRequired == true && '*'}</label>
                                              <textarea name={`input_${field.id}`} onChange={formField} /></div>;
                                        default :
                                        return <div className={styles.gravity_form_field}>
                                              <label htmlFor={`form-field-${i}`}>{field.label} {field.isRequired == true && '*'}</label>
                                              <input
                                              id={`form-field-${i}`}
                                              type={field.type} 
                                              name={`input_${field.id}`}
                                              onChange={formField}
                                              required={field.isRequired == true && 'required'}
                                              placeholder={field.placeholder && field.placeholder }
                                               />
                                            </div>;
                                    }
                                })()}
                                </div>
                        </>
                    )
                })
                }
                <button type="submit" className="mb-10">{form?.button?.text}</button>
          </form>
        } */}
        </>
    )
}