import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logoscroll from '../../components/Logoscroll'
import styles from '../../styles/Leaderboard.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import Countdown from '../../components/Countdown';
import Leaderboard from '../../components/Leaderboard';

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
export default function CALeaderboard({allData}) {
  return (
    <>
    <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <title>TEDx IITH | Leaderboard</title>
            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
        <div className={`${styles.slider_area} ${styles.slider_bg_1}`}>
            <Leaderboard allData={allData}/>
        </div>
    </>
  )
}

