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
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content=""/>
        <link href="https://assets-global.website-files.com/62d1f2146087f67fb3fc980c/css/webflowconf-2022.webflow.81e13c77d.min.css" rel="stylesheet" type="text/css"/>
        
        <title>TEDx IITH | Contact Us</title>
        
        </Head>
        <>
        <section data-w-id="cf7a5bcc-72e5-3805-1397-f700e1ccb624" className="section cc-header">
            <div className="u-bg-grid-top_right cc-overlay">
            <img src="https://assets-global.website-files.com/62d1f2146087f67fb3fc980c/6319f682d128c594a9015a97_Build-06.svg" loading="eager" alt="" className="blur cc-top-right cc-short-header" />
            <div className="glasses-wrapper">
                <div className={`glass cc-1 ${styles.item1}`}>
                </div>
                <div className={`glass cc-4 ${styles.item1}`}>
                </div>
                <div className={`glass cc-3 ${styles.item1}`}>
                </div>
            </div>
            <div className="section u-pt-0">
                <div className="container u-z-index-1">
                    <section id="contact-map" className={`${styles.section_padding}`}>
                        <div className="container">
                        <div className="row">
                            <div className="col-12">
                            <div className={`${styles.section_title_header} text-center`}>
                                <h1 id={`${styles.heading}`}>Get in Touch with Us</h1>
                                <div className="buttons">
                                <a href="#" className={`${styles.button}`} role="button">Sponsor Us</a>
                                <a href="#" className={`${styles.button}`} role="button">Be Our Speaker</a>
                            </div>
                                <h3 className={`${styles.gap}`}>Fill the form below!!! <br/>You can reach us if you follow
                                the map directions</h3>
                            </div>
                            </div>
                        </div>
                        
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12 col-xs-12">
                            <div className={`${styles.container_form} wow fadeInLeft`} data-wow-delay="0.2s">
                                <div className={`${styles.form_wrapper}`}>
                                <form name="submit-to-google-sheet">
                                    <div className="row">
                                    <div className="col-md-6 form-line">
                                        <div className={`${styles.form_group}`}>
                                        <input type="text" className={`${styles.form_control}`} id="name" name="Name" placeholder="Name" required
                                            data-error="Please enter your name"/>
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 form-line">
                                        <div className={`${styles.form_group}`}>
                                        <input type="email" className={`${styles.form_control}`} id="email" name="Email" placeholder="Email" required
                                            data-error="Please enter your Email"/>
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 form-line">
                                        <div className={`${styles.form_group}`}>
                                        <input type="text" className={`${styles.form_control}`} id="phonenumber" name="mobile" placeholder="Mobile Number" required
                                            data-error="Please enter your Mobile Number"/>
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                        <div className="col-md-6 form-line">
                                        <div className={`${styles.form_group}`}>
                                            <input type="text" className={`${styles.form_control}`} id="collegename" name="College-Name" placeholder="College name" required
                                            data-error="Please enter your College Name"/>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        </div>
                                    <div className="col-md-12 form-line">
                                        <div className={`${styles.form_group}`}>
                                        <input type="text" className={`${styles.form_control}`} id="msg_subject" name="subject" placeholder="Subject"
                                            required data-error="Please enter your message subject"/>
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className={`${styles.form_group}`}>
                                        <textarea className={`${styles.form_control}`} rows="4" id="message" name="message" required placeholder="Enter your Problem"
                                            data-error="Write your message"></textarea>
                                        </div>
                                        <div className={`${styles.form_submit}`}>
                                        <button type="submit" value="submit" name="submit" className="btn btn-common" id={`${styles.form_submit}`}><i
                                                className="fa fa-paper-plane" aria-hidden="true"></i> Send
                                            Message</button>
                                    </div>
                                    </div>
                                    </div>
                                    <br/>
                                    <span id={`${styles.success}`}></span>
                                </form>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    </div>
            </div>
            </div>
        </section>
        </>
        

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