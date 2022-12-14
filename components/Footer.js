import Link from "next/link";
import styles from "./Footer.module.css";


export default function Footer(){
    return (
        <footer className={`${styles.footer} ${styles.footer_bg_1}`}>
            <div className={`${styles.circle_ball} d-none d-lg-block`}>
                <img src="/banner/footer_ball.png" alt=""/>
            </div>
                <div className={styles.footer_top}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 col-lg-4">
                                <div className={styles.footer_widget}>
                                    <h3 className={styles.footer_title}>
                                            Follow Us
                                    </h3>
                                    <ul>
                                        <li><a target="_blank" href="#">Facebook</a></li>
                                        <li><a target="_blank" href="#">Twitter</a></li>
                                        <li><a target="_blank" href="#">Instagram</a></li>
                                        <li><a target="_blank" href="#">Youtube</a></li>
                                    </ul>
        
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-lg-4">
                                <div className={styles.footer_widget}>
                                    <h3 className={styles.footer_title}>
                                            Links
                                    </h3>
                                    <ul>
                                        <li><a target="_blank" href="schedule.html">Schedule</a></li>
                                        <li><a target="_blank" href="speakers.html">Speakers</a></li>
                                        <li><a target="_blank" href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-lg-4">
                                <div className={styles.footer_widget}>
                                    <h3 className={styles.footer_title}>
                                            Venue
                                    </h3>
                                    <p>
                                        200, D-block, Green lane USA <br/>
                                        edumark@contact.com <br/>
                                        +10 367 467 8934
                                        
                                    </p>
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
    Copyright &copy;<script>document.write(new Date().getFullYear());</script>
     All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i>
      by <a href="https://colorlib.com" target="_blank">Colorlib</a>
   
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
    )
}