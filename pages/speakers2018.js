import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import React from "react"
import SpeakersPage from '../components/speakersnavbar'
import style from '../styles/Speakersupcoming.module.css'
import styles from '../styles/Speakerspast.module.css'
export default function Upcomingspeakers() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <title>TEDx IITHyderabad</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div> <Navbar /></div>
            <section className={style.body}>
                <div style={{ paddingTop: "25px" }}>
                    <SpeakersPage />
                </div>
                <section className={style.main_content}>
                    <div className={style.heading}>
                        Past Speakers
                    </div>
                    <div className={style.year}>2018</div>
                    {/* 2022 */}
                    {/* Speaker Section Begin */}
                    <section className={styles.speaker_section_spad}>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className={styles.speaker_item}>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className={styles.si_pic}>
                                                    <img src="speakers/2016/Anuj Gurwara.jpg" alt="" width={350} height={350} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className={styles.si_text}>
                                                    <div className={styles.si_title}>
                                                        <h4>Anuj Gurwara</h4>
                                                    </div>
                                                    <p>
                                                        Businesses often become known today through effective
                                                        marketing. The marketing may be in the form of a regular
                                                        news item or half column society news in the Sunday
                                                        newspaper.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className={styles.speaker_item}>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className={styles.si_pic}>
                                                    <img src="speakers/2016/Dr. Vishal Rao.jpg" alt="" width={350} height={350} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className={styles.si_text}>
                                                    <div className={styles.si_title}>
                                                        <h4>Dr. Vishal Rao</h4>
                                                    </div>
                                                    <p>
                                                        Businesses often become known today through effective
                                                        marketing. The marketing may be in the form of a regular
                                                        news item or half column society news in the Sunday
                                                        newspaper.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className={styles.speaker_item}>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className={styles.si_pic}>
                                                    <img src="speakers/2016/Jayesh Ranjan.jpg" alt="" width={350} height={350} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className={styles.si_text}>
                                                    <div className={styles.si_title}>
                                                        <h4>Jayesh Ranjan</h4>
                                                     
                                                    </div>
                                                    
                                                    <p>
                                                        Businesses often become known today through effective
                                                        marketing. The marketing may be in the form of a regular
                                                        news item or half column society news in the Sunday
                                                        newspaper.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className={styles.speaker_item}>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className={styles.si_pic}>
                                                    <img src="speakers/2016/Rajesh Narasimhan.jpg" alt="" width={350} height={350} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className={styles.si_text}>
                                                    <div className={styles.si_title}>
                                                        <h4>Rajesh Narasimhan</h4>
                                                      
                                                    </div>
                                                   
                                                    <p>
                                                        Businesses often become known today through effective
                                                        marketing. The marketing may be in the form of a regular
                                                        news item or half column society news in the Sunday
                                                        newspaper.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className={styles.speaker_item}>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className={styles.si_pic}>
                                                    <img src="speakers/2016/Ramesh Loganathan.jpg" alt="" width={350} height={350} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className={styles.si_text}>
                                                    <div className={styles.si_title}>
                                                        <h4>Ramesh Loganathan</h4>
                                                       
                                                    </div>
                                                    
                                                    <p>
                                                        Businesses often become known today through effective
                                                        marketing. The marketing may be in the form of a regular
                                                        news item or half column society news in the Sunday
                                                        newspaper.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className={styles.speaker_item}>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className={styles.si_pic}>
                                                    <img src="speakers/2016/Vennela Krishna.jpg" alt="" width={350} height={350} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className={styles.si_text}>
                                                    <div className={styles.si_title}>
                                                        <h4>Vennela Krishna</h4>
                                                        
                                                    </div>
                                                   
                                                    <p>
                                                        Businesses often become known today through effective
                                                        marketing. The marketing may be in the form of a regular
                                                        news item or half column society news in the Sunday
                                                        newspaper.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Speaker Section End */}
                    <Footer />
                </section>
            </section>
        </>
    )
}
