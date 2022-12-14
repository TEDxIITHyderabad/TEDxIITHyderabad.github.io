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
                            <div className={`col-xl-11 col-md-7 col-lg-7 d-none d-lg-block`}>
                                <img src="/barnd/tedx.png" alt="" height={70} />
                                <p style={{paddingTop:"30px", color:"white"}}> 
                                    Something about TEDx IIT Hyderabad.
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                                    orem Ipsum Lorem Ipsum Lorem Ipsum 
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum orem Ipsum Lorem Ipsum Lorem Ipsum 
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                                </p>
                                    <div className={styles.footer_widget}>
                                        
                                        <ul className={styles.horizontal_social_icons} style={{ listStyle:'none' , padding:2, margin:0}}>
                                            <li>
                                                <a target="_blank" href="#">
                                                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="#">
                                                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="#">
                                                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="#">
                                                <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="#">
                                                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                        </ul>
                                                
                                    </div>
                            </div>
                            <div className="col-xl-1 col-md-1 col-lg-1">
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.copy_right_text}>
                    <div className="container">
                        <div className={styles.footer_border}></div>
                        <div className="row">
                            <div className="col-xl-12">
                                <p className={`${styles.copy_right} text-center`}>
    {/* Copyright &copy; */}
    {/* <script>document.write(new Date().getFullYear());</script> */} 
    {/* try and fix above line (hydration error)prolly have to use useEffect and stuff*/ }
     {/* All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i>
      by <a href="https://colorlib.com" target="_blank">Colorlib</a> */}
   This independent TEDx event is operated under license from TED.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
    )
}