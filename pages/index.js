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
import NavbarComp from '../components/Navbar'
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
      <NavbarComp />
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

      <div className={styles.background}>

        <div className={styles["main-video-cont"]}>
          <iframe className={styles["main-video"]} src="https://www.youtube.com/embed/7HQ1OLYaTyE"></iframe>
          <div className={styles["main-video-text"]}>Weaving the<br />
            Saga of humanity<br />
            through
            <div> health & fitness</div>
          </div>
        </div>


        <div className={styles.speakers_2023}>THEME</div>
        <div className={styles.theme_desc}>Humans have been kicking around a pale blue dot in space for a while now. The rise and fall, the ups and downs, and the meandering turns humankind has taken have been painted and weaved onto the tapestry - our legacy and the proof of our existence in an otherwise unchanging and indifferent universe. People spanning cultures, eras, nationalities, and backgrounds have contributed to compiling the saga of all time. This saga has been visualized, part by part, and time-to-time in tapestries. Join us as we weave together the tapestry of the lives, the ideas, and the revolutions made by transient individuals to make an immortal and magnificent representation of humanity: Humanity's Tapestry.</div>
        {/* TODO: Add images and hoer effect*/}
        <div className={styles.theme_cont}></div>

        <div className={styles.speakers_2023}>SPEAKERS 2023</div>
        <ImageScroll speakers={speakers} />``
        <h1 className={styles.speakers_2023}>REASON TO ATTEND</h1>
        <Grid />
        <h1 className={styles.speakers_2023}>GLIMPSE</h1>
        <ImageScroll speakers={images} />
        {/* <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div> */}
        <Footer />
      </div>


      {/* <Logoscroll/> */}
    </>
  )
}

