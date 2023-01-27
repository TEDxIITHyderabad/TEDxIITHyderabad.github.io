import Head from 'next/head'
import Footer from '../components/Footer'
import NavbarComp from '../components/Navbar'
import styles from '../styles/Speakers.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

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
            <h2>Past Speakers</h2>
            <h4>2022</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}

  {/* 2022 */}
  {/* Speaker Section Begin */}
  <section className={styles.speaker_section_spad}>
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className={styles.speaker_item}>
            <div className="row">
              <div className="col-lg-6">
                <div className={styles.si_pic}>
                  <img src="speakers/2022/Copy of Anju Arora.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.si_text}>
                  <div className={styles.si_title}>
                    <h4>Anju Arora</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=l6vllOmyxNY&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=31">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2022/Copy of Chirantana 2.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Chirantana</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=TjMJdOZ2KVo&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=34">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2022/Copy of Leena Haldar 1.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Leena Haldar</h4>
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
                    <a target="_blank" href="">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2022/Copy of Nupur Agarwal0.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Nupur Agarwal</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=UMDJEeEY7BY&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=36">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2022/Copy of Srinivas Prabhu.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Srinivas Prabhu</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=vHMBbFRJJ2I&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=32">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2022/Copy of Yasaswini copy.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Yasaswini</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=gf_1_8dNgRU&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=28">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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

  {/* 2021 */}
  <section className={styles.breadcrumb_section}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className={styles.breadcrumb_text}>
            <h4>2021</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  {/* Speaker Section Begin */}
  <section className={styles.speaker_section_spad}>
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className={styles.speaker_item}>
            <div className="row">
              <div className="col-lg-6">
                <div className={styles.si_pic}>
                  <img src="speakers/2021/anahita sarabhai.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.si_text}>
                  <div className={styles.si_title}>
                    <h4>Anahita Sarabhai</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=4vM9n5C4Gv8&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=16">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2021/Aruna Bahuguna.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Aruna Bahuguna</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=I3xQWhIE-kE&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=18">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2021/Kamal Nayak.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Kamal Nayak</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=qoLTWCbG7p0&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=33">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2021/Meghnad S.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Meghnad S</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=C55yyTl1vwM&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=35">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2021/Pooja Dagli.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Pooja Dagli</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=Lqt7w0BKUUI&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=30">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2021/Swami Sarvapriyananda.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Swami Sarvapriyananda</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=B1oYvwMVbiw&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=7">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2021/Vimal Chandran.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Vimal Chandran</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=maK87FO1Jy4&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=26">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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

  {/* 2019 */}
  <section className={styles.breadcrumb_section}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className={styles.breadcrumb_text}>
            <h4>2019</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  {/* Speaker Section Begin */}
  <section className={styles.speaker_section_spad}>
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className={styles.speaker_item}>
            <div className="row">
              <div className="col-lg-6">
                <div className={styles.si_pic}>
                  <img src="speakers/2019/Amala Akkineni.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.si_text}>
                  <div className={styles.si_title}>
                    <h4>Amala Akkineni</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=Q5-dPIXjcUc&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=8">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2019/Asif Qureshi.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Asif Qureshi</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=7HQ1OLYaTyE&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=20">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2019/Hanif Kureshi.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Hanif Kureshi</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=P9mvZlv5-x8&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=27">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2019/Ravi Narayan.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Ravi Narayan</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=Om2Q384dMuk&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=25">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2019/Ritwik Mishra.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Ritwik Mishra</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=3cKwpt4VDYk&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=29">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2019/Sophia David.png" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Sophia David</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=dPGRpzamh9c&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=11">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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

  {/* 2017 */}
  <section className={styles.breadcrumb_section}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className={styles.breadcrumb_text}>
            <h4>2017</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  {/* Speaker Section Begin */}
  <section className={styles.speaker_section_spad}>
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className={styles.speaker_item}>
            <div className="row">
              <div className="col-lg-6">
                <div className={styles.si_pic}>
                  <img src="speakers/2017/Aditi Avasthi.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.si_text}>
                  <div className={styles.si_title}>
                    <h4>Aditi Avasthi</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=P9rpYLOdBdM&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=4">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2017/Anam Hashim.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Anam Hashim</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=LBpRMqjNl20&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=5">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2017/Arpan Shah.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Arpan Shah</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=bAQI0FiewmM&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=6">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2017/Bari Anwar.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Bari Anwar</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=uTSaaY2uUcY&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=24">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2017/KK Senthil Kumar.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>KK Senthil Kumar</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=B2DQfFfYJXA&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=2">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2017/Prof. BM Hegde.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Prof. BM Hegde</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=K-mgmIjaRlY&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=1">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2017/Richa Singh.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Richa Singh</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=yAsnF8nCuOQ&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=21">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2017/Rajaram Bojji.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Rajaram Bojji</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=PqUd7H_L-Ew&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=23">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
  
  {/* 2016 */}
  <section className={styles.breadcrumb_section}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className={styles.breadcrumb_text}>
            <h4>2016</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  {/* Speaker Section Begin */}
  <section className={styles.speaker_section_spad}>
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className={styles.speaker_item}>
            <div className="row">
              <div className="col-lg-6">
                <div className={styles.si_pic}>
                  <img src="speakers/2016/Anuj Gurwara.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.si_text}>
                  <div className={styles.si_title}>
                    <h4>Anuj Gurwara</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=KiateofiBY0&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=10">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2016/Dr. Vishal Rao.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Dr. Vishal Rao</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=JYDPO9VykHY&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=9">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2016/Jayesh Ranjan.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Jayesh Ranjan</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=l103C_ISp3s&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=14">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2016/Rajesh Narasimhan.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Rajesh Narasimhan</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=xZqziah4MYE&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=12">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2016/Ramesh Loganathan.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Ramesh Loganathan</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=0h-iUAXwqEs&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=15">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2016/Vennela Krishna.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Vennela Krishna</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=9_bQodgnVAs&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=3">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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

  {/* 2015 */}
  <section className={styles.breadcrumb_section}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className={styles.breadcrumb_text}>
            <h4>2015</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  {/* Speaker Section Begin */}
  <section className={styles.speaker_section_spad}>
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className={styles.speaker_item}>
            <div className="row">
              <div className="col-lg-6">
                <div className={styles.si_pic}>
                  <img src="speakers/2015/ananda shankar jayant.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.si_text}>
                  <div className={styles.si_title}>
                    <h4>Ananda Shankar Jayant</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=uo7S6pXGegA&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=19">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2015/Neeraj Jain.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Neeraj Jain</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=TkGgYhxIg7Y&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=17">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2015/Subhas Chandra.png" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>Subhas Chandra</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=-wckO2el0N4&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=13">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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
                  <img src="speakers/2015/VK Saraswat.jpg" alt="" width={250} height={320}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className= {styles.si_text}>
                  <div className= {styles.si_title}>
                    <h4>VK Saraswat</h4>
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
                    <a target="_blank" href="https://www.youtube.com/watch?v=YmFcge3jnlI&list=PLh8o9JoJGw0lgThlG4tBpI9yllVJqn8OZ&index=22">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
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