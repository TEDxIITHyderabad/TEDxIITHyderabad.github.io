import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
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
                    <div className="position_relv">
                        <h1 className="opcity_text d-none d-lg-block">CONFIRENCE</h1>
                        <div className="row">
                            <div className="col-xl-9">
                                <div className="title_text">
                                    <h3>Digital Design <br/>
                                        Conference <br/>
                                        2019 NYC</h3>
                                    <a href="#" className="boxed-btn-white">Add to your Calendar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="countDOwn_area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="single_date">
                                <i className="ti-location-pin"></i>
                                <span>City Hall, New York City</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-lg-3">
                            <div className="single_date">
                                <i className="ti-alarm-clock"></i>
                                <span>12-15 Sep 2019</span>
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
    </>
  )
}

