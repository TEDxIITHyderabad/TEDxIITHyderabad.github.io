import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import NavbarComp from '../components/Navbar'
import styles from '../styles/Team.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Team(){
    return (
        <>
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <title>TEDx IITHyderabad | Team</title>
            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
    <section className={styles.background_image}>
        <div className={styles.speakers_area}>
            <div className='d-none d-lg-block'>
                <h1 className={styles.horizontal_text}>
                    Team
                </h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className='mb-95'>
                            <div className={styles.serction_title_large}> 
                                <h3>
                                    Team
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className='mb-95'>
                            <div className={styles.serction_title_large}> 
                                <h3>
                                    Heads
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-12 offset-xl-1 col-xl-5 offset-lg-2 col-lg-8 col-md-10 offset-md-1 col-sm-12">
                        <div className={styles.single_speaker}>
                            <div className={styles.speaker_thumb}>
                                <img className={styles.image_OC} src="/team/Mahati_chittem.jpeg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Mahati Chittem</h3>
                                <p>Faculty in Charge</p>
                            </div>
                        </div>
                    </div>
                    {/* <div><br/></div> */}
                    {/* <div className="col-lg-4 offset-lg-4 col-md-6 col-sm-12"> */}
                    <div className="col-12 offset-xl-0 col-xl-5 offset-lg-2 col-lg-8 col-md-10 offset-md-1 col-sm-12">
                        <div className={styles.single_speaker}>
                            <div className={styles.speaker_thumb}>
                                <img className={styles.image_OC} src="/team/Cores/Poorvika C.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Poorvika C</h3>
                                <p>Overall Head and Licensee</p>
                            </div>
                        </div>
                    </div>
                    <div><br/></div>  {/*find a better method to do this */}
                      {/*find a better method to do this */}
                    
                    <div className="row">
                        <div className="col-xl-12">
                            <div className='mb-95'>
                                <div className={styles.serction_title_large}> 
                                    <h3>
                                        Cores
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ---- cores start ---- */}

                    <div className="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2 col-10 offset-1">
                        <div className={styles.single_speaker}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Cores/Gowri Govindaraj .JPG" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Gowri Govindaraj</h3>
                                <p>Marketing & Sales</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2 col-10 offset-1">
                        <div className={styles.single_speaker}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Cores/Vikhyath.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Vikhyath</h3>
                                <p>Experience & Hospitality</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2 col-10 offset-1">
                        <div className={styles.single_speaker}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Cores/Madhuri Annavazzala .jpeg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Madhuri Annavazzala</h3>
                                <p>Content & Curation</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-2 col-md-6 offset-md-0 col-sm-8 offset-sm-2 col-10 offset-1">
                        <div className={styles.single_speaker}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Cores/Prakhar Patni.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Prakhar Patni</h3>
                                <p>Finance & Sponsorship
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-0 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-10 offset-1">
                        <div className={styles.single_speaker}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Cores/Ritik.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Ritik</h3>
                                <p>Branding & Design</p>
                            </div>
                        </div>
                    </div>
                    {/* ---- cores end ---- */}
                    <div><br/></div>
                    {/* ---- coords start ---- */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className='mb-95'>
                                <div className={styles.serction_title_large}> 
                                    <h3>
                                        Coordinators
                                    </h3>
                                    <br/>
                                    <h5>
                                        Branding & Design
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Branding&Design/Ambady Ravi .jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Ambady Ravi</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Branding&Design/Ansh Agarwal.jpeg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Ansh Agarwal</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Branding&Design/Athul krishna.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Athul krishna</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Branding&Design/Gatikrushna Mohapatra.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Gatikrushna Mohapatra</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Branding&Design/IMG_20220716_181055_Bokeh.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Sakshi Jalla</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Branding&Design/Pracheet Padher.jpeg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Pracheet Padher</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Branding&Design/Trisha_Patidar.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Trisha Patidar</h3>
                            </div>
                        </div>
                    </div>
                    

                    <div className="row">
                        <div className="col-xl-12">
                            <div className='mb-95'>
                                <div className={styles.serction_title_large}> 
                                    <h5>
                                        Content & Curation
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Content&Curation/Amulya Tallamraju.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Amulya Tallamraju</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Content&Curation/Hitesh Donepudi .jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Hitesh Donepudi</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Content&Curation/Ishita Dingare.png" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Ishita Dingare</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Content&Curation/Karthik M Nambiar.JPG" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Karthik M Nambiar</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Content&Curation/PrachiSharma.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Prachi Sharma</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Content&Curation/Rishit D.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Rishit D</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Content&Curation/Sumedh Kashikar.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Sumedh Kashikar</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Content&Curation/Swarangi Tambat.JPG.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Swarangi Tambat</h3>
                            </div>
                        </div>
                    </div>




                    <div className="row">
                        <div className="col-xl-12">
                            <div className='mb-95'>
                                <div className={styles.serction_title_large}> 
                                    <h5>
                                        Experience & Hospitality
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Experience&Hospitality/Aditya Kapilesh .jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Aditya Kapilesh</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Experience&Hospitality/AmithReddy.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Amith Reddy</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Experience&Hospitality/Ananda Krishnan .jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Ananda Krishnan</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Experience&Hospitality/Kushagra.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Kushagra Gupta</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Experience&Hospitality/Suddhodhan .jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Suddhodhan</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Experience&Hospitality/Titeeksha Godambe .jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Titeeksha Godambe</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Experience&Hospitality/Vedant Kshirsagar .jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Vedant Kshirsagar</h3>
                            </div>
                        </div>
                    </div>
                    {/* ---- cores end ---- */}





                    <div className="row">
                        <div className="col-xl-12">
                            <div className='mb-95'>
                                <div className={styles.serction_title_large}> 
                                    <h5>
                                        Finance & Sponsorship
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Finance&Sponsorship/Akshat Jain.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Akshat Jain</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Finance&Sponsorship/Areeb Hussain.JPG" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Areeb Hussain</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Finance&Sponsorship/Kartik Katekar.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Kartik Katekar</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Finance&Sponsorship/Mouktika.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Mouktika</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Finance&Sponsorship/Niharika Singh.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Niharika Singh</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Finance&Sponsorship/Rutv Kocheta.jpeg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Rutv Kocheta</h3>
                            </div>
                        </div>
                    </div>



                    <div className="row">
                        <div className="col-xl-12">
                            <div className='mb-95'>
                                <div className={styles.serction_title_large}> 
                                    <h5>
                                        Marketing & Sales
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Marketing&Sales/Aditya Sridhar.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Aditya Sridhar</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Marketing&Sales/Dhruvin Shah.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Dhruvin Shah</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Marketing&Sales/Krutika Kulkarni .jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Krutika Kulkarni</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Marketing&Sales/Mahin Bansal.jpeg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Mahin Bansal</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Marketing&Sales/Manas Bhargava .jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Manas Bhargava</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                        <div className={styles.single_speaker_coords}>
                            <div className={styles.speaker_thumb}>
                                <img src="/team/Coords/Marketing&Sales/Sai Harish Madireddi.jpg" alt=""/>
                                <div className={styles.hover_overlay}>
                                    <div className={styles.social_icon}>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a target="_blank" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.speaker_name} style={{textAlign:'center'}}>
                                <h3>Sai Harish Madireddi</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}