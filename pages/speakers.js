import Head from 'next/head'
import Footer from '../components/Footer'
import NavbarComp from '../components/Navbar'
import styles from '../styles/Speakers.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Speakers(){
    return (
        <>
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <title>TEDx IITH | Speakers</title>
            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <>
  {/* Breadcrumb Section Begin */}
  <section className={styles.breadcrumb_section}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className={styles.breadcrumb_text}>
            <h2>Feature Speakers</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
  {/* Speaker Section Begin */}
  <section className={styles.speaker_section_spad}>
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className={styles.speaker_item}>
            <div className="row">
              <div className="col-lg-6">
                <div className={styles.si_pic}>
                  <img src="speakers/speaker-1.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.si_text}>
                  <div className={styles.si_title}>
                    <h4>Jayden Gill</h4>
                    <span>Speaker</span>
                  </div>
                  <div className={styles.si_social}>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </a>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </a>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </a>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faGooglePlus}></FontAwesomeIcon>
                    </a>
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
          <div className= {styles.speaker_item}>
            <div className="row">
              <div className="col-lg-6">
                <div className= {styles.si_pic}>
                  <img src="speakers/speaker-2.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Mary Jane</h4>
                    <span>Speaker</span>
                  </div>
                  <div className= {styles.si_social}>
                  <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </a>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </a>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </a>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faGooglePlus}></FontAwesomeIcon>
                    </a>
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
          <div className= {styles.speaker_item}>
            <div className="row">
              <div className="col-lg-6">
                <div className= {styles.si_pic}>
                  <img src="speakers/speaker-3.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Jack Human</h4>
                    <span>Manager</span>
                  </div>
                  <div className= {styles.si_social}>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </a>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </a>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </a>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faGooglePlus}></FontAwesomeIcon>
                    </a>
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
          <div className= {styles.speaker_item}>
            <div className="row">
              <div className="col-lg-6">
                <div className= {styles.si_pic}>
                  <img src="speakers/speaker-4.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Sara Brudt</h4>
                    <span>Speaker</span>
                  </div>
                  <div className= {styles.si_social}>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </a>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </a>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </a>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faGooglePlus}></FontAwesomeIcon>
                    </a>
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
          <div className= {styles.speaker_item}>
            <div className="row">
              <div className="col-lg-6">
                <div className= {styles.si_pic}>
                  <img src="speakers/speaker-5.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Emma Sandoval </h4>
                    <span>CEO</span>
                  </div>
                  <div className= {styles.si_social}>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </a>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </a>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </a>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faGooglePlus}></FontAwesomeIcon>
                    </a>
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
          <div className= {styles.speaker_item}>
            <div className="row">
              <div className="col-lg-6">
                <div className= {styles.si_pic}>
                  <img src="speakers/speaker-6.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Harriet Freeman</h4>
                    <span>Marketing Manager</span>
                  </div>
                  <div className= {styles.si_social}>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </a>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </a>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </a>
                    <a target="_blank" href="#">
                      <FontAwesomeIcon icon={faGooglePlus}></FontAwesomeIcon>
                    </a>
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
  </>

        </>
    )
}