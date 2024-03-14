import { NextResponse } from 'next/server';

export async function POST(req, res) {

  if (req.method === 'POST') {

    try {

      const body = await req.json();

      const response = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS_FORM}1/submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : 'Basic ' + btoa(process.env.NEXT_PUBLIC_HEADLESS_FORM_USERNAME + ':' + process.env.NEXT_PUBLIC_HEADLESS_FORM_PASSWORD)
        },
        body: JSON.stringify(body),
      });

      const result = await response.json();


       if (response.ok) { 
          console.log("submission successfull");
         
       }
       else {
           console.error('Failed to submit the form:', response.statusText);
       }

       return NextResponse.json(result);

    } catch (error) {
      console.error('Error processing form submission:', error);
      return NextResponse.error('Error processing form submission', 500);
    }
  } else {
    // Return an error for unsupported HTTP methods
    return NextResponse.error('Method Not Allowed', 405);
  }
}