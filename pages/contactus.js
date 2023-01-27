import Head from 'next/head'
import styles from '../styles/Contactus.module.css'
import { useEffect } from 'react'
export default function Contactus(){
    useEffect(()=>{
        // const scriptURL = 'https://script.google.com/macros/s/AKfycbxlogqpLlsVsTIuKR3rLczer6jq9SH3nSqJyn5dQC8zlccT93yNQZ7Ik102_qkmyJCi/exec'
        // const form = document.forms['submit-to-google-sheet']
        // const success = document.getElementById('success');
        // form.addEventListener('submit', e => {
        //     e.preventDefault()
        //     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        //     .then(response => {
        //     alert("Data Successfully Submitted!!!! We will reach you Soon via E-Mail");
        //     setTimeout(function(){
        //         success.innerHTML="Data Successfully submitted!!!We will reach you soon via E-Mail"
        //     },
        //     )
        //     form.reset();
        //     },5000)
        //     .catch(error => console.error('Error!', error.message))
        // })
        console.log('hello');
    },[])
        
    return (
        <>
        <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content=""/>
        <title>TEDx IITH | Contact Us</title>
        
        </Head>
        <iframe src="./contactuspage.html" style={{border:"none",height:"482px",width:"100%"}} title='contactus'></iframe>

        {/* <section id={`${styles.google_map_area}`}>
            <div className={`${styles.container_fluid}`}>
            <div className="row">
                <div className="offset-3 col-6">
                <object style={{ height: "400px", width: "100%"}}
                    data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.1105891573707!2d78.12462711467383!3d17.597482687953015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf74c33e604bf%3A0xaea55e33f7530ee!2sIITH%20Hostel%20office!5e0!3m2!1sen!2sin!4v1673621683466!5m2!1sen!2sin"></object>
                </div>
            </div>
            </div>
        </section> */}
        {/* <section id={`${styles.contact_text}`}>
            <div className="container">
            <div className={`row ${styles.contact_wrapper}`}>
                <div className="col-lg-4 col-md-5 col-xs-12">
                <ul>
                    <li>
                    <i className="fa-solid fa-house-user"></i>
                    </li>
                    <li><span>Mess Lawns, IIT Hyderabad</span></li>
                </ul>
                </div>
                <div className="col-lg-4 col-md-3 col-xs-12">
                <ul>
                    <li>
                    <i className="fa-solid fa-phone"></i>
                    </li>
                    <li><span>+789 123 456 79</span></li>
                </ul>
                </div>
                <div className="col-lg-4 col-md-3 col-xs-12">
                <ul>
                    <li>
                    <i className="fa-solid fa-envelope"></i>
                    </li>
                    <li><span>tedx@iith.ac.in</span></li>
                </ul>
                </div>
            </div>
            </div>
        </section> */}
        </>
    )
}