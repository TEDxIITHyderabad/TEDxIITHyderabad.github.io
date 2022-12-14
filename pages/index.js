import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Logoscroll from '../components/Logoscroll'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
        {/* <div className="slider_area slider_bg_1"> */}
        <div className={`${styles.slider_area} ${styles.slider_bg_1}`}>
            <div className="slider_text">
                <div className="container">
                    <div className={styles.position_relv}>
                        <h1 className={`${styles.opcity_text} d-none d-lg-block`}>IIT Hyderabad<br/> TEDx</h1>
                        <div className="row">
                            <div className="col-xl-9">
                                <div className={styles.title_text}>
                                    <h3>TEDx IITH<br/>
                                        Conference <br/>
                                        2023<br/>
                                        </h3>
                                    <Link href="#" className={styles.boxed_btn_white} passHref>Nominate Speakers</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.countdown_area}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className={styles.single_date}>
                                <i className="ti-location-pin"></i>
                                <span>IIT, Kandiiiiiii</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-lg-3">
                            <div className={styles.single_date}>
                                <i className="ti-alarm-clock"></i>
                                <span>32-35 Apr, 2023</span>
                            </div>
                        </div>

                        <div className="col-xl-5 col-md-12 col-lg-5">
                            <span id="clock"></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      <Logoscroll/>
      <Footer/>
    </>
  )
}

