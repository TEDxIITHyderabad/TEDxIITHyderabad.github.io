import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logoscroll from '../components/Logoscroll'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import Countdown from '../components/Countdown';
import Leaderboard from '../components/Leaderboard';

let dev = process.env.NODE_ENV !== 'production';
let { DEV_URL, PROD_URL } = process.env;
export async function getServerSideProps(ctx) {
    const res = await fetch(`${dev ? DEV_URL : PROD_URL}/api/leaderboard`, {
        method: "GET",
        });
    let allData = await res.json();
    console.log(allData);
    return {
        props: {
            allData: allData['data']
        }
    }
}
export default function Home({allData}) {
    
  return (
    <>
    <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <title>TEDx IITH</title>
            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
        <div className={`${styles.slider_area} ${styles.slider_bg_1}`}>
            <div className="slider_text">
                <div className="container">
                    <div className={styles.position_relv}>
                        <h1 className={`${styles.opcity_text} d-none d-lg-block`}>IIT Hyderabad<br/> TEDx</h1>
                        <div className="row">
                            <div className="col-xl-9">
                                <div className={styles.title_text}>
                                    <h3>TEDx IITH<br/>
                                        2023 <br/>
                                        Edition<br/>
                                        </h3>
                                    <div>
                                        <Link href="#" className={styles.boxed_btn_white} passHref>Nominate Speakers</Link>
                                    </div>
                                    <div>
                                        <Link href="#" className={styles.boxed_btn_white} style={{marginTop: "10px"}} passHref>Buy Tickets</Link>
                                    </div>
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
                                <FontAwesomeIcon icon={faLocationDot}/>
                                <span> IIT Hyderabad</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-lg-3">
                            <div className={styles.single_date}>
                                <FontAwesomeIcon icon={faCalendarAlt}/>
                                <span> 32-35 Apr, 2023</span>
                            </div>
                        </div>

                        <div className="col-xl-5 col-md-12 col-lg-5">
                            {/* <Countdown/> */}
                            <div className={styles.single_date}>
                                <FontAwesomeIcon icon={faClock}/>
                                <span> Coming Soon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Logoscroll/>
        <Leaderboard allData={allData}/>
    </>
  )
}

