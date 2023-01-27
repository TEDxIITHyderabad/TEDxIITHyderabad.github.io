import Link from "next/link";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    return (
        <footer className={`${styles.footer} ${styles.footer_bg_1}`}>
                <div className={styles.footer_top}>
                    <div className="container">
                        <div className="row">
                            <div className={`offset-lg-0 col-lg-1 col-md-12 d-block`} style={{alignItems:"center"}}>
                                <img className={`${styles.image_logo}`} src="/tedx_logo.png" alt="" height={110}/>
                            </div>
                            <div className={`offset-lg-0 col-lg-8 col-md-12  d-block text-center`}>
                                <p style={{color:"red"}}> 
                                    TEDx IIT Hyderabad
                                </p>
                                <p className={`${styles.copy_right} text-center`} style={{color:"white"}} >
   This independent TEDx event is operated under license from TED.
                                </p>
                            </div>
                            <div className={`offset-lg-0 col-lg-3 col-md-12  d-block text-center`}>
                                    <div className={styles.footer_widget}>
                                        <ul className={styles.horizontal_social_icons} style={{ listStyle:'none' , padding:2, margin:0}}>
                                            <li>
                                                <a target="_blank" href="https://www.instagram.com/tedx.iithyderabad/?hl=en">
                                                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://www.facebook.com/TEDxIITHyd/">
                                                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://twitter.com/tedxiithyd/">
                                                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            {/* <li>
                                                <a target="_blank" href="#">
                                                <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                                                </a>
                                            </li> */}
                                            <li>
                                                <a target="_blank" href="https://www.linkedin.com/company/tedxiith/?originalSubdomain=in">
                                                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                        </ul>
                                                
                                    </div>
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
