import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Team.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Team(){
    return (
        <>
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <title>TEDx IITH | Team</title>
            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Navbar/>
        <br/> {/*find a better way to do this */}
        <br/>
        <br/>
        <div className={styles.speakers_area}>
            <div className='d-none d-lg-block'>
                <h1 class={styles.horizontal_text}>
                    Team
                </h1>
            </div>
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div className='mb-95'>
                        <div class={styles.serction_title_large}> 
                            <h3>
                                Team
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">

                {/* ---- OC below ---- */}

                <div class="col-xl-6 col-md-6 offset-xl-3">
                    <div class={styles.single_speaker}>
                        <div class={styles.speaker_thumb}>
                            <img className={styles.image} src="/team/1.png" alt=""/>
                            <div class={styles.hover_overlay}>
                                <div class={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller</h3>
                            <p>OC</p>
                        </div>
                    </div>
                </div>
                <div><br/></div>  {/*find a better method to do this */}
                

                {/* ---- cores start ---- */}

                <div class="col-xl-4 col-md-6">
                    <div class={styles.single_speaker}>
                        <div class={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div class={styles.hover_overlay}>
                                <div class={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller</h3>
                            <p>Creative Director</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class={styles.single_speaker}>
                        <div class={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div class={styles.hover_overlay}>
                                <div class={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller</h3>
                            <p>Creative Director</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class={styles.single_speaker}>
                        <div class={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div class={styles.hover_overlay}>
                                <div class={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller</h3>
                            <p>Creative Director</p>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-md-6 offset-xl-2">
                    <div class={styles.single_speaker}>
                        <div class={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div class={styles.hover_overlay}>
                                <div class={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller</h3>
                            <p>Creative Director</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class={styles.single_speaker}>
                        <div class={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div class={styles.hover_overlay}>
                                <div class={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller</h3>
                            <p>Creative Director</p>
                        </div>
                    </div>
                </div>
                {/* ---- cores end ---- */}


                {/* ---- coords start ---- */}

                <div class="col-xl-3 col-md-6">
                    <div class={styles.single_speaker}>
                        <div class={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div class={styles.hover_overlay}>
                                <div class={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller</h3>
                            <p>Creative Director</p>
                        </div>
                    </div>
                    <div class={styles.single_speaker}>
                        <div class={styles.speaker_thumb}>
                            <img src="/team/3.png" alt=""/>
                            <div class={styles.hover_overlay}>
                                <div class={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Albert Jackey</h3>
                            <p>Product Designer</p>
                        </div>
                    </div>
                    <div class={styles.single_speaker}>
                        <div class={styles.speaker_thumb}>
                            <img src="/team/3.png" alt=""/>
                            <div class={styles.hover_overlay}>
                                <div class={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Albert Jackey</h3>
                            <p>Product Designer</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class={styles.single_speaker}>
                        <div class={styles.speaker_thumb}>
                            <img src="/team/2.png" alt=""/>
                            <div class={styles.hover_overlay}>
                                <div class={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Kelvin Cooper</h3>
                            <p>Art Director</p>
                        </div>
                    </div>
                    <div class={styles.single_speaker}>
                        <div class={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div class={styles.hover_overlay}>
                                <div class={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>    
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Marked Macau</h3>
                            <p>UI/UX Designer</p>
                        </div>
                    </div>
                    <div class={styles.single_speaker}>
                        <div class={styles.speaker_thumb}>
                            <img src="/team/3.png" alt=""/>
                            <div class={styles.hover_overlay}>
                                <div class={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Albert Jackey</h3>
                            <p>Product Designer</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class={styles.single_speaker}>
                        <div class={styles.speaker_thumb}>
                            <img src="/team/2.png" alt=""/>
                            <div class={styles.hover_overlay}>
                                <div class={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>    
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Kelvin Cooper</h3>
                            <p>Art Director</p>
                        </div>
                    </div>
                    <div class={styles.single_speaker}>
                        <div class={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div class={styles.hover_overlay}>
                                <div class={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>    
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Marked Macau</h3>
                            <p>UI/UX Designer</p>
                        </div>
                    </div>
                    <div class={styles.single_speaker}>
                        <div class={styles.speaker_thumb}>
                            <img src="/team/3.png" alt=""/>
                            <div class={styles.hover_overlay}>
                                <div class={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Albert Jackey</h3>
                            <p>Product Designer</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class={styles.single_speaker}>
                        <div class={styles.speaker_thumb}>
                            <img src="/team/2.png" alt=""/>
                            <div class={styles.hover_overlay}>
                                <div class={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Kelvin Cooper</h3>
                            <p>Art Director</p>
                        </div>
                    </div>
                    <div class={styles.single_speaker}>
                        <div class={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div class={styles.hover_overlay}>
                                <div class={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Marked Macau</h3>
                            <p>UI/UX Designer</p>
                        </div>
                    </div>
                    <div class={styles.single_speaker}>
                        <div class={styles.speaker_thumb}>
                            <img src="/team/3.png" alt=""/>
                            <div class={styles.hover_overlay}>
                                <div class={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Albert Jackey</h3>
                            <p>Product Designer</p>
                        </div>
                    </div>
                </div>

                {/* ---- cores end ---- */}

            </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}