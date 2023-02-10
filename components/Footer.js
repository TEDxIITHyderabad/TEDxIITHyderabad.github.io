import Link from "next/link";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";
import { Button } from "bootstrap";
export default function Footer(){
    return (
       
        <footer className={`${styles.footer} ${styles.footer_bg_1}`}>
                <div className={styles.footer_top}>
                    <div className="container">
                        <div className="row">
                            <div className={`col-12 d-block`} style={{alignItems:"center"}}>
                                <img className={`${styles.image_logo}`} src="/tedx_logo.png" alt="" height={150}/>
                            </div>
                            {/* <div className={`offset-lg-0 col-lg-1 col-md-12 d-block`} style={{alignItems:"center"}}>
                                <img className={`${styles.image_logo}`} src="/tedx_logo.png" alt="" height={110}/>
                            </div> */}
                            {/* <div className={`offset-lg-0 col-lg-8 col-md-12  d-block text-center`}>
                                <p style={{color:"red"}}> 
                                    TEDx<span style={{color:"white"}}>IITHyderabad</span>
                                </p>
                                <p className={`${styles.copy_right} text-center`} style={{color:"white"}} >
   This independent TEDx event is operated under license from TED.
                                </p>
                            </div> */}
                            {/* <div className={`offset-lg-0 col-lg-3 col-md-12  d-block text-center`}>
                                    <div className={styles.footer_widget}>
                                        <ul className={styles.horizontal_social_icons} style={{ listStyle:'none' , padding:2, margin:0}}>
                                            <li>
                                                <a target="_blank" href="https://www.instagram.com/tedx.iithyderabad/?hl=en">
                                                <FontAwesomeIcon icon={faInstagram} className={`fa-xl`}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://www.facebook.com/TEDxIITHyd/" >
                                                <FontAwesomeIcon icon={faFacebook} className={`fa-xl`}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://twitter.com/tedxiithyd/">
                                                <FontAwesomeIcon icon={faTwitter} className={`fa-xl`}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://www.linkedin.com/company/tedxiith/?originalSubdomain=in">
                                                <FontAwesomeIcon icon={faLinkedin} className={`fa-xl`}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                        </ul>
                                                
                                    </div>
                            </div> */}
                            
                            <div className={`col-12  d-block text-center`}>
                                    <div className={styles.footer_widget}>
                                        <ul className={styles.horizontal_social_icons} style={{ listStyle:'none' , padding:2, margin:0}}>
                                            <li>
                                                <a target="_blank" href="https://www.instagram.com/tedx.iithyderabad/?hl=en">
                                                <FontAwesomeIcon icon={faInstagram} className={`fa-xl`}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://www.facebook.com/TEDxIITHyd/" >
                                                <FontAwesomeIcon icon={faFacebook} className={`fa-xl`}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://twitter.com/tedxiithyd/">
                                                <FontAwesomeIcon icon={faTwitter} className={`fa-xl`}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://www.linkedin.com/company/tedxiith/?originalSubdomain=in">
                                                <FontAwesomeIcon icon={faLinkedin} className={`fa-xl`}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                        </ul>
                                                
                                    </div>
                            </div>
                            <div className={`col-12  d-block text-center`}>
                                    <div className={styles.footer_widget}>
                                        <ul className={styles.horizontal_quick_links} style={{ listStyle:'none' , padding:2, margin:0}}>
                                            <li >
                                                <Link href="/contactus">Contact Us</Link>
                                                {/* <Button variant="primary" size="lg"> abcd </Button> */}
                                            </li>
                                            <li>
                                                    <Link href="/CA/aboutus">About Us</Link>
                                            </li>
                                            <li>
                                                    <Link href="/CA/incentives">CA Program</Link>
                                            </li>
                                            <li>
                                                    <Link target={"_blank"} href="https://docs.google.com/forms/d/e/1FAIpQLSdcZiEC5DQSGLvwqvpJlvHOoaFa3-zKp38oVFiCh-4BJZ_2IQ/viewform">Nominate Speakers</Link>
                                            </li>
                                        </ul>
                                                
                                    </div>
                            </div>
                            <div>
                                <hr style={{border:"1px solid white"}}></hr>
                                <p className={`${styles.copy_right} text-center`} style={{color:"white"}} >
   This independent <span style={{color:"#eb0028"}}>TEDx</span> event is operated under license from <span style={{color:"#eb0028"}}>TED</span>
                                </p>
                            </div>
                            {/* <div className="col-md-1 col-lg-1">
                                <div className={styles.footer_widget}>
                                    <h3 className={styles.footer_title}>
                                            Links
                                    </h3>
                                    <ul style={{ listStyle:'none' , padding:0, margin:0}}>
                                        <li><a target="_blank" href="schedule.html">Schedule</a></li>
                                        <li><a target="_blank" href="speakers.html">Speakers</a></li>
                                        <li><a target="_blank" href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <div className={styles.copy_right_text}>
                    <div className="container">
                        <div className={styles.footer_border}></div>
                        <div className="row">
                            <div className="col-xl-12">
                                <p className={`${styles.copy_right} text-center`} >
   This independent TEDx event is operated under license from TED.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
        </footer>
    )
}
