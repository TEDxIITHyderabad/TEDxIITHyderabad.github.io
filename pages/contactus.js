import Head from 'next/head'
import NavbarComp from '../components/Navbar'
import styles from '../styles/Contactus.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHouse, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Footer from '../components/Footer';
import FormData from 'form-data';
export default function Contactus() {

        const scriptURL = 'https://script.google.com/macros/s/AKfycbxlogqpLlsVsTIuKR3rLczer6jq9SH3nSqJyn5dQC8zlccT93yNQZ7Ik102_qkmyJCi/exec'
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [mobile, setMobile] = useState('');
        const [college, setCollege] = useState('');
        const [subject, setSubject] = useState('');
        const [problem, setProblem] = useState('');
        const [success, setSuccess] = useState('');
        const formData = new FormData();
        function handleSubmit(e) {
            e.preventDefault();
            formData.append('Name', name);
            formData.append('Email', email);
            formData.append('mobile', mobile);
            formData.append('College-Name', college);
            formData.append('subject', subject);
            formData.append('message', problem);
            console.log(formData.values)
            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    alert("Data Successfully Submitted!!!! We will reach you Soon via E-Mail");
                    setTimeout(function () {
                        setSuccess("Data Successfully submitted!!!We will reach you soon via E-Mail")
                    },)
                    location.reload();
                }, 5000)
                .catch(error => console.error('Error!', error.message))
        }
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <title>TEDx IITHyderabad | Contact Us</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className={styles.background}>
                <NavbarComp />
                <div className="section u-pt-0">
                    <div className="container u-z-index-1">
                        <section id={`${styles.contact_map}`} className={`${styles.section_padding}`}>
                            <div className="container" >
                                <div className="row">
                                    <div className="col-12">
                                        <div className={`text-center ${styles.section_title_header}`}>
                                            <h1 id={`${styles.heading}`}>Get in Touch with Us</h1>
                                            <div className={styles.buttons}>
                                                <a target="_blank" href="https://unstop.com/o/9ICh86s?lb=JfDgvZP" className={styles.boxed_btn_white} role="button">BOOK TICKETS</a>
                                            </div>
                                            <h3 className={styles.gap}>Fill the form below!!! <br />You can reach us if you follow
                                                the map directions</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-lg-8 col-md-12 col-xs-12">
                                        <div className={`${styles.container_form} wow fadeInLeft`} data-wow-delay="0.2s">
                                            <div className={styles.form_wrapper}>
                                                <form name="submit-to-google-sheet">
                                                    <div className="row">
                                                        <div className="col-md-6 form-line">
                                                            <div className={styles.form_group}>
                                                                <input type="text" className={styles.form_control} id="name" name="Name" placeholder="Name" required onChange={(e) => { setName(e.target.value) }}
                                                                    data-error="Please enter your name" />
                                                                <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 form-line">
                                                            <div className={styles.form_group}>
                                                                <input type="email" className={styles.form_control} id="email" name="Email" placeholder="Email" required onChange={(e) => { setEmail(e.target.value) }}
                                                                    data-error="Please enter your Email" />
                                                                <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 form-line">
                                                            <div className={styles.form_group}>
                                                                <input type="text" className={styles.form_control} id="phonenumber" name="mobile" placeholder="Mobile Number" required onChange={(e) => { setMobile(e.target.value) }}  
                                                                    data-error="Please enter your Mobile Number" />
                                                                <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 form-line">
                                                            <div className={styles.form_group}>
                                                                <input type="text" className={styles.form_control} id="collegename" name="College-Name" placeholder="College name" required onChange={(e) => { setCollege(e.target.value) }}
                                                                    data-error="Please enter your College Name" />
                                                                <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 form-line">
                                                            <div className={styles.form_group}>
                                                                <input type="text" className={styles.form_control} id="msg_subject" name="subject" placeholder="Subject"  onChange={(e) => { setSubject(e.target.value) }}
                                                                    required data-error="Please enter your message subject" />
                                                                <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className={styles.form_group}>
                                                                <textarea className={styles.form_control} rows="4" id="message" name="message" required placeholder="Enter your Problem" onChange={(e) => { setProblem(e.target.value) }}
                                                                    data-error="Write your message"></textarea>
                                                            </div>
                                                            <div className={styles.form_submit}>
                                                                <button onClick={handleSubmit} value="submit" name="submit" className={`btn ${styles.btn_common}`}>
                                                                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>{"  "}
                                                                Send Message
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <span id={styles.success} >{success}</span>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <section id={styles.google_map_area}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <object style={{border:"0", height: "450px", width: "100%"}}
                                    data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.1105891573707!2d78.12462711467383!3d17.597482687953015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf74c33e604bf%3A0xaea55e33f7530ee!2sIITH%20Hostel%20office!5e0!3m2!1sen!2sin!4v1673621683466!5m2!1sen!2sin"></object>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={styles.contact_text}>
                    <div className="container">
                        <div className={`row ${styles.contact_wrapper}`}>
                            <div className="col-lg-4 col-md-5 col-xs-12">
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                                    </li>
                                    {"     "}
                                    <li><span style={{fontSize:"20px"}}>IIT Hyderabad</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-3 col-xs-12">
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                    </li>
                                    {"     "}

                                    <li><span style={{fontSize:"20px"}}>+91 99008 10774</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-3 col-xs-12">
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                    </li>
                                    {"     "}
                                    <li><a target="_blank" id={styles.tedx_website} href="https://tedxiithyderabad.iith.ac.in/"><span style={{fontSize:"20px"}}>tedx@iith.ac.in</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
            {/* <iframe src="./contactuspage.html" style={{border:"none",height:"482px",width:"100%"}} title='contactus'></iframe> */}
        </>
    )
}