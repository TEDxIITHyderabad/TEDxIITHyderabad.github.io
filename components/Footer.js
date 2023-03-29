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
                                `col-lg-3 
                                offset-lg-0

                                col-md-2
                                offset-md-1 

                                col-sm-3
                                offset-sm-2 

                                offset-4
                                col-8 
                                
                                p-0 
                                mb-5 
                                `} >
                                    <h5 className={`mb-4  ${styles.title}`}>Follow TEDxIITHyderabad</h5>
                                    <ul className={`list-group`}>
                                    <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a target="_blank" href="https://www.instagram.com/tedx.iithyderabad/?hl=en">Instagram</a></li>
                                    <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a target="_blank" href="https://www.youtube.com/channel/UC9rUC6h741BwWpkCb8ui-4A">YouTube</a></li>
                                    <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a target="_blank" href="https://twitter.com/TEDxIITHyd">Twitter</a></li>
                                    <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a target="_blank" href="https://in.linkedin.com/company/tedxiith">LinkedIn</a></li>
                                    <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a target="_blank" href="https://www.facebook.com/TEDxIITHyderabad/">Facebook</a></li>
                                    <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a target="_blank" href="https://blog.ted.com/">TED Blog</a></li>
                                    </ul>
                            </div>

                            <div className={
                                `offset-lg-1
                                col-lg-4 

                                offset-md-2
                                col-md-4

                                offset-sm-2 
                                col-sm-5 

                                offset-4
                                col-8 

                                p-0 
                                mb-5 
                                `}>
                                    <h5 className={`mb-4   ${styles.title}`}>Programs & Initiatives</h5>
                                    <ul className={`list-group`}>
                                        <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a target="_blank" href="https://www.ted.com/about/programs-initiatives/tedx-program">TEDx</a></li>
                                        <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a target="_blank" href="https://www.ted.com/participate/ted-fellows-program/apply-to-be-a-ted-fellow">TED Fellows</a></li>
                                        <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a target="_blank" href="https://ed.ted.com/">TED Ed</a></li>
                                        <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a target="_blank" href="https://www.ted.com/about/programs-initiatives/ted-translators">TED Translators</a></li>
                                        <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a target="_blank" href="https://www.ted.com/about/programs-initiatives/ted-institute">TED Institute</a></li>
                                        <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a target="_blank" href="https://www.audaciousproject.org/">The Audacious Project</a></li>
                                        <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a target="_blank" href="https://www.ted.com/about/programs-initiatives/ted-work#:~:text=TED%40Work%20is%20a%20content,specially%20curated%20for%20Learning%20%26%20Development">TED@Work</a></li>
                                        <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a target="_blank" href="https://speakersbureau.ted.com/">TED Speakers Bureau</a></li>
                                        <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a target="_blank" href="https://courses.ted.com/">TED Courses</a></li>
                                    </ul>
                            </div>  

                            

                            <div className={
                                `col-lg-4

                                offset-md-0
                                col-md-3

                                offset-sm-5 
                                col-sm-6 

                                offset-4
                                col-8

                                mb-5 
                                p-0 
                                `}>
                                <h5 className={`mb-4  ${styles.title}`}>Our Community</h5>
                                <ul className={`list-group`}>
                                <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a target="_blank" href="https://www.ted.com/speakers">TED Speakers</a></li>
                                <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a target="_blank" href="https://www.ted.com/participate/ted-fellows-program/meet-the-ted-fellows">TED Fellows</a></li>
                                <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a target="_blank" href="https://www.ted.com/about/programs-initiatives/ted-translators">TED Translators</a></li>
                                <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a target="_blank" href="https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide">TEDx Organisers</a></li>
                                <li className={`list-group-item bg-transparent border-0 p-0 mb-2 ${styles.text}`}><a target="_blank" href="https://community.ted.com/">TED Community</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className={`${styles.ultrafooter}`} >
                        <div style={{margin:"10px"}}>
                            <div className={`py-4 d-md-flex d-block justify-content-center `}>
                                <a target="_blank" href="https://www.ted.com/about/our-organization/our-policies-terms/ted-talks-usage-policy">TED Talks Usage Policy</a>
                                <a target="_blank" href="https://www.ted.com/about/our-organization/our-policies-terms/privacy-policy">Privacy Policy</a>
                                <a target="_blank" href="https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/sponsors-finances/sponsors-partnerships/about-partnerships">Advertising / Partnership</a>
                                <a target="_blank" href="https://www.ted.com/">TED.com</a>
                                <a target="_blank" href="https://www.ted.com/about/our-organization/our-policies-terms/ted-com-terms-of-use">Terms of Use</a>
                                <a target="_blank" href="https://www.ted.com/about/our-organization/jobs-at-ted">Jobs</a>
                                <a target="_blank" href="https://www.ted.com/about/our-organization/contact-us/press-and-media-information">Press</a>
                                <a target="_blank" href="https://help.ted.com/hc/en-us">Help</a>
                                <a target="_blank" href="https://www.ted.com/about/our-organization/our-policies-terms/privacy-policy">Privacy Preferences</a>
                                <a target="_blank" href="https://www.ted.com/membership">Membership</a>
                                <a target="_blank" href="https://www.ted.com/attend/conferences" style={{color:"#818794" }}>	&#169; TED Conferences. LLC. All rights reserved.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
