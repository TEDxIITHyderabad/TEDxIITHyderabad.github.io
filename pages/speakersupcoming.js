import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import React from "react"
import SpeakersPage from '../components/speakersnavbar'
import style from '../styles/Speakersupcoming.module.css'
import styles from '../styles/Speakers.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

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
            Upcoming Speakers
          </div>
          <div className={style.year}>2023</div>

          {/* Speaker Section Begin */}
          <section className={styles.speaker_section_spad}>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <div className={styles.speaker_item}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className={styles.si_pic}>
                          <img src="speakers/2022/Copy of Anju Arora.jpg" alt="" width={350} height={350} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className={styles.si_text}>
                          <div className={styles.si_title}>
                            <h4>Yasaswini Jonnalagadda</h4>
                            <p>Topic - Global Issues</p>
                          </div>
                          <p>
                          How much can we, as a society, be self-reliant? Yasaswini Jonnalagadda's story from being an electrical engineer and an MBA graduate to a committed social worker who roots for compassion to change the world is ..... Read more.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className={styles.speaker_item}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className={styles.si_pic}>
                          <img src="speakers/2022/Copy of Chirantana 2.jpg" alt="" width={350} height={350} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className={styles.si_text}>
                          <div className={styles.si_title}>
                            <h4>Chirantana</h4>
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
                      <div className="col-lg-6">
                        <div className={styles.si_pic}>
                          <img src="speakers/2022/Copy of Leena Haldar 1.jpg" alt="" width={350} height={350} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className={styles.si_text}>
                          <div className={styles.si_title}>
                            <h4>Leena Haldar</h4>
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
                      <div className="col-lg-6">
                        <div className={styles.si_pic}>
                          <img src="speakers/2022/Copy of Nupur Agarwal0.jpg" alt="" width={350} height={350} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className={styles.si_text}>
                          <div className={styles.si_title}>
                            <h4>Nupur Agarwal</h4>
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
                      <div className="col-lg-6">
                        <div className={styles.si_pic}>
                          <img src="speakers/2022/Copy of Srinivas Prabhu.jpg" alt="" width={350} height={350} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className={styles.si_text}>
                          <div className={styles.si_title}>
                            <h4>Srinivas Prabhu</h4>
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
                      <div className="col-lg-6">
                        <div className={styles.si_pic}>
                          <img src="speakers/2022/Copy of Yasaswini copy.jpg" alt="" width={350} height={350} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className={styles.si_text}>
                          <div className={styles.si_title}>
                            <h4>Yasaswini</h4>
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
                      <div className="col-lg-6">
                        <div className={styles.si_pic}>
                          <img src="speakers/2022/Copy of Anju Arora.jpg" alt="" width={350} height={350} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className={styles.si_text}>
                          <div className={styles.si_title}>
                            <h4>Anju Arora</h4>
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
                      <div className="col-lg-6">
                        <div className={styles.si_pic}>
                          <img src="speakers/2022/Copy of Chirantana 2.jpg" alt="" width={350} height={350} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className={styles.si_text}>
                          <div className={styles.si_title}>
                            <h4>Chirantana</h4>
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