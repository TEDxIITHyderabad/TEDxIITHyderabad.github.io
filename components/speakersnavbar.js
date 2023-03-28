import Link from 'next/link';
import styles from './Speakers.module.css';
export default function SpeakersPage() {
    return (
        <>
            {/* <div className={`${styles.heading1}`}>
                <span className={`${styles.upcoming_speakers} `} style={{ marginRight: "50px" }}>Upcoming Speakers-2023 =&gt;</span>
                <button className={`${styles.buttons}`}>SPEAKERS 2023</button>
            </div> */}
            {/* <hr className={`${styles.line}`}></hr> */}
            <div className={`${styles.heading2}`}>
                {/* <h1 className="past_speakers">
                    Past Speakers(2017-2022)
                </h1> */}
            </div>
            <div className={styles.speaker_button_cont}>

                <a href="/speakersupcoming" className={styles.buttons_a}>
                    <button className={styles.buttons}>SPEAKERS 2023</button>
                </a>
                <a href="/speakers2022" style={{ textDecoration: 'none' }}>
                    <button className={styles.buttons}>SPEAKERS 2022</button>
                </a>
                <a href="/speakers2021" style={{ textDecoration: 'none' }}>
                    <button className={styles.buttons}>SPEAKERS 2021</button>
                </a>
                <a href="/speakers2020" style={{ textDecoration: 'none' }}>
                    <button className={styles.buttons}>SPEAKERS 2019</button>
                </a>

                <a href="/speakers2019" style={{ textDecoration: 'none' }}>
                    <button className={styles.buttons}>SPEAKERS 2017</button>
                </a>
                <a href="/speakers2018" style={{ textDecoration: 'none' }}>
                    <button className={styles.buttons}>SPEAKERS 2016</button>
                </a>
                <a href="/speakers2017" style={{ textDecoration: 'none' }}>
                    <button className={styles.buttons}>SPEAKERS 2015</button>
                </a>
            </div>


            <hr className={`${styles.line}`}></hr>
        </>
    );
}

{/* <div className="col-lg-2 col-sm-4 col-6">
<a href="/speakers2017" style={{ textDecoration: 'none' }}>
    <button className={styles.buttons}>SPEAKERS 2017</button>
</a>
</div> */}
