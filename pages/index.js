import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import NavbarComp from '../components/Navbar'
import { speakers } from '../components/speakers1'
import React from "react";
import Grid from '/components/GridSpeakers'
import HorizontalScroll from '../components/HorizontalScroll.js';

const images = [
  { image: '/homepageimg/glimpse1.jpg', width: 400, height: 267 },
  { image: '/homepageimg/glimpse10.jpg', width: 400, height: 267 },
  { image: '/homepageimg/glimpse3.jpg', width: 400, height: 267 },
  { image: '/homepageimg/glimpse4.jpg', width: 400, height: 267 },
  { image: '/homepageimg/glimpse5.jpg', width: 400, height: 267 },
  { image: '/homepageimg/glimpse6.jpg', width: 400, height: 267 },
  { image: '/homepageimg/glimpse7.jpg', width: 400, height: 267 },
  { image: '/homepageimg/glimpse9.jpg', width: 400, height: 267 },
  { image: '/homepageimg/glimpse2.jpg', width: 400, height: 267 },
  { image: '/homepageimg/glimpse8.jpg', width: 400, height: 267 },
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
            <button className={styles.buttons + " " + styles["book-tickets"]}><a target="_blank" href="https://unstop.com/o/9ICh86s?lb=JfDgvZP">BOOK TICKETS</a></button>
            {/* <button className={styles.buttons + " " + styles.merch}>CHECKOUT MERCH</button> */}
          </div>
        </div>

      </div>

      <div className={styles.background}>

        <div className={styles["main-video-cont"]}>
          <iframe className={styles["main-video"]} src="https://www.youtube.com/embed/vsZUFsGzxcA"></iframe>
          <div className={styles["main-video-text"]}>Weaving the<br />
            Saga of humanity<br />
            through
            <div class={styles.slidingVertical}>
              <span>Pleasure</span>
              <span>Science and technology</span>
              {/* <span>Social Sciences</span> */}
              <span>Business</span>
              <span>Education</span>
              <span>Nature and Wildlife</span>
            </div>
          </div>
        </div>

        <div className={styles.speakers_2023}>THEME</div>
        <div className={styles.theme_desc}>Humans have been kicking around a pale blue dot in space for a while now. The rise and fall, the ups and downs, and the meandering turns humankind has taken have been painted and weaved onto the tapestry - our legacy and the proof of our existence in an otherwise unchanging and indifferent universe. People spanning cultures, eras, nationalities, and backgrounds have contributed to compiling the saga of all time. This saga has been visualized, part by part, and time-to-time in tapestries. Join us as we weave together the tapestry of the lives, the ideas, and the revolutions made by transient individuals to make an immortal and magnificent representation of humanity: Humanity's Tapestry.</div>
        <div className={styles.theme_cont}>

          <div class={styles.sub_theme_main}>
            <div class={styles.sub_theme_image_cont1}>
              <div class={styles.sub_theme_image_cont2}>
                <img class={styles.sub_theme_image} src='subthemes/Business.png' />
              </div>
            </div>
          </div>
          <div class={styles.sub_theme_main}>
            <div class={styles.sub_theme_image_cont1}>
              <div class={styles.sub_theme_image_cont2}>
                <img class={styles.sub_theme_image} src='subthemes/Education.png' />
              </div>
            </div>
          </div>
          <div class={styles.sub_theme_main}>
            <div class={styles.sub_theme_image_cont1}>
              <div class={styles.sub_theme_image_cont2}>
                <img class={styles.sub_theme_image} src='subthemes/Nature_and_Wildlife.png' />
              </div>
            </div>
          </div>
          <div class={styles.sub_theme_main}>
            <div class={styles.sub_theme_image_cont1}>
              <div class={styles.sub_theme_image_cont2}>
                <img class={styles.sub_theme_image} src='subthemes/Science_and_tech.png' />
              </div>
            </div>
          </div>
          <div class={styles.sub_theme_main}>
            <div class={styles.sub_theme_image_cont1}>
              <div class={styles.sub_theme_image_cont2}>
                <img class={styles.sub_theme_image} src='subthemes/Social_Sciences.png' />
              </div>
            </div>
          </div>

        </div>

        <div className={styles.speakers_2023}>SPEAKERS 2023</div>
        <div className={styles.smallmargin}><HorizontalScroll speakers={speakers} />
</div>

        <h1 className={styles.speakers_2023}>REASONS TO ATTEND</h1>
        <Grid />
        <h1 className={styles.speakers_2023}>GLIMPSE</h1>
        <div className={styles.smallmargin}><HorizontalScroll speakers={images} /></div>
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

