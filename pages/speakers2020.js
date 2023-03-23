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
                    <div className={style.year}>2020</div>
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
                                                    <img src="speakers/2019/Amala Akkineni.jpg" alt="" width={350} height={350} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className={styles.si_text}>
                                                    <div className={styles.si_title}>
                                                        <h4>Amala Akkineni</h4>
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
                                                    <img src="speakers/2019/Asif Qureshi.jpg" alt="" width={350} height={350} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className={styles.si_text}>
                                                    <div className={styles.si_title}>
                                                        <h4>Asif Qureshi</h4>
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
                                                    <img src="speakers/2019/Hanif Kureshi.jpg" alt="" width={350} height={350} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className={styles.si_text}>
                                                    <div className={styles.si_title}>
                                                        <h4>Hanif Kureshi</h4>
                                                     
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
                                                    <img src="speakers/2019/Ravi Narayan.jpg" alt="" width={350} height={350} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className={styles.si_text}>
                                                    <div className={styles.si_title}>
                                                        <h4>Ravi Narayan</h4>
                                                      
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
                                                    <img src="speakers/2019/Ritwik Mishra.jpg" alt="" width={350} height={350} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className={styles.si_text}>
                                                    <div className={styles.si_title}>
                                                        <h4>Ritwik Mishra</h4>
                                                       
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
                                                    <img src="speakers/2019/Sophia David.png" alt="" width={350} height={350} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className={styles.si_text}>
                                                    <div className={styles.si_title}>
                                                        <h4>Sophia David</h4>
                                                        
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
