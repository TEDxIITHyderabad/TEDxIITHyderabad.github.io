import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import { Inter } from '@next/font/google'
import Logoscroll from '../components/Logoscroll'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Countdown from '../components/Countdown';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ImageScroll from '../components/HorizontalImageScroll'
import { speakers } from './speakers1'
import React from "react";
import Grid from '/components/GridSpeakers'


const images = [
  { image: '/homepageimg/Rectangle 35.png', width: 350, height: 350 },
  { image: '/homepageimg/Rectangle 36.png', width: 350, height: 350 },
  { image: '/homepageimg/Rectangle 37.png', width: 350, height: 350 },
  { image: '/homepageimg/image 2.png', width: 350, height: 350 },
];

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>TEDx IITHyderabad</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.background}>
        <Navbar/>
      <div className={styles.main}>
        <img className={styles["hero-image"]} src="/images/background.jpg" draggable="false" />
        <div className={styles["hero-main"]}>
          <p className={styles["hero-title"]}>SAGA</p>
          <p className={styles["hero-subtitle"]}>Weaving humanity's tapestry </p>
        </div>
        <div className={styles["hero-theme-cont"]}>
          <p className={styles["hero-theme"]}>Timely and timeless, humanity is the best of us</p>
          <div className={styles["hero-buttons"]}>
            <button className={styles.buttons + " " + styles["book-tickets"]}>BOOK TICKETS</button>
            <button className={styles.buttons + " " + styles.merch}>CHECKOUT MERCH</button>
          </div>
        </div>

      </div>


      <div className={styles["main-video-cont"]}>
        <iframe className={styles["main-video"]} src="https://www.youtube.com/embed/7HQ1OLYaTyE"></iframe>
        <div className={styles["main-video-text"]}>Weaving the<br />
          Saga of humanity<br />
          through
          <div>health & fitness</div>
        </div>
      </div>
        <div className={styles.speakers_2023}>SPEAKERS 2023</div>
        <ImageScroll speakers={speakers} />
        <h1 className={styles.speakers_2023}>REASON TO ATTEND</h1>
        <Grid />
        <h1 className={styles.speakers_2023}>GLIMPSE</h1>
        <ImageScroll speakers={images} />
        <Footer />
      </div>


      {/* <Logoscroll/> */}
    </>
  )
}

