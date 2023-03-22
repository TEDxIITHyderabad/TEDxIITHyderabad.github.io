import Link from "next/link";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    return (
        <footer style={{backgroundColor:"transparent"}}>
            <div className={`pt-1 border-bottom`} >
                <hr className={`${styles.hr}`}></hr>
                <div className={`row`} style={{marginTop:"80px"}}>
                    <div className={`col-lg-3 col-12 mb-3 text-center`}>
                        <img  src="/tedx_logo.png" style={{marginLeft:"auto", marginRight:"auto"}} width={200} alt="TEDx IITHyderabad"/>
                    </div>
                    <div className={`col-lg-9 col-12`}>
                        <div className={`row`} style={{marginBottom:"50px", marginTop:"30px"}}>
                            <div className={
                                `offset-lg-1
                                col-lg-4 

                                offset-md-1
                                col-md-4

                                offset-sm-1 
                                col-sm-6 

                                offset-0
                                col-12 

                                p-0 
                                mb-5 
                                `}>
                                    <h5 className={`mb-4   ${styles.title}`}>Programs & Initiatives</h5>
                                    <ul className={`list-group`}>
                                        <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a href="#">TEDx</a></li>
                                        <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a href="#">TED Fellows</a></li>
                                        <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a href="#">TED Ed</a></li>
                                        <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a href="#">TED Translators</a></li>
                                        <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a href="#">TED Institute</a></li>
                                        <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a href="#">The Audacious Project</a></li>
                                        <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a href="#">TED@Work</a></li>
                                        <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a href="#">TED Speakers Bureau</a></li>
                                        <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a href="#">TED Courses</a></li>
                                    </ul>
                            </div>  

                            <div className={
                                `col-lg-3 
                                offset-lg-0

                                col-md-2
                                offset-md-0 

                                col-sm-4
                                offset-sm-0 

                                offset-0
                                col-12 
                                
                                p-0 
                                mb-5 
                                `} >
                                    <h5 className={`mb-4  ${styles.title}`}>Follow TED</h5>
                                    <ul className={`list-group`}>
                                    <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a href="#">Facebook</a></li>
                                    <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a href="#">Twitter</a></li>
                                    <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a href="#">Instagram</a></li>
                                    <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a href="#">YouTube</a></li>
                                    <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a href="#">LinkedIn</a></li>
                                    <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a href="#">TED Blog</a></li>
                                    </ul>
                            </div>

                            <div className={
                                `col-lg-4

                                offset-md-0
                                col-md-4

                                offset-sm-3
                                col-sm-6 

                                offset-0
                                col-12 

                                mb-5 
                                p-0 
                                `}>
                                <h5 className={`mb-4  ${styles.title}`}>Our Community</h5>
                                <ul className={`list-group`}>
                                <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a href="#">TED Speakers</a></li>
                                <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a href="#">TED Fellows</a></li>
                                <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a href="#">TED Translators</a></li>
                                <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a href="#">TEDx Organisers</a></li>
                                <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a href="#">TED Community</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className={`${styles.ultrafooter}`} >
                        <div style={{margin:"10px"}}>
                            <div className={`py-4 d-md-flex d-block justify-content-center `}>
                                <a href="#">TED Talks Usage Policy</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Advertising / Partnership</a>
                                <a href="#">TED.com</a>
                                <a href="#">Terms of Use</a>
                                <a href="#">Jobs</a>
                                <a href="#">Press</a>
                                <a href="#">Help</a>
                                <a href="#">Privacy Preferences</a>
                                <a href="#">Membership</a>
                                <a href="#" style={{color:"#818794" }}>	&#169; TED Conferences. LLC. All rights reserved.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
