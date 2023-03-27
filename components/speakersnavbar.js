import Link from 'next/link';
import styles from './Speakers.module.css';
export default function SpeakersPage() {
    return (
        <>
            <div className={`${styles.heading1}`}>
                <span className={`${styles.upcoming_speakers}`} style={{marginRight:"50px"}}>Upcoming Speakers-2023 =&gt;</span>
                <button className={`${styles.speaker_2023}`}>
                    <Link href="/speakersupcoming">
                        <span className={`${styles.link}`}>Upcoming Speakers-2023</span>
                    </Link>
                </button>
            </div>
            <hr className={`${styles.line}`}></hr>
            <div className={`${styles.heading2}`}>
                {/* <h1 className="past_speakers">
                    Past Speakers(2017-2022)
                </h1> */}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-sm-4 col-6">
                        <button className={`${styles.speaker_2023}`}>
                            <Link href="/speakers2022">
                                <span className={`${styles.link}`}>Speakers-2022</span>
                            </Link>
                        </button>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6">
                        <button className={`${styles.speaker_2023} ${styles.link}`}>
                            <a href="/speakers2021">
                                {/* <span className={`${styles.link}`}> */}
                                    Speakers-2021
                                {/* </span> */}
                            </a>
                        </button>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6">
                        <button className={`${styles.speaker_2023}`}>
                            <Link href="/speakers2020">
                                <span className={`${styles.link}`}>Speakers-2020</span>
                            </Link>
                        </button>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6">
                        <button className={`${styles.speaker_2023}`}>
                            <Link href="/speakers2019">
                                <span className={`${styles.link}`}>Speakers-2019</span>
                            </Link>
                        </button>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6">
                        <button className={`${styles.speaker_2023}`}>
                            <Link href="/speakers2018">
                                <span className={`${styles.link}`}>Speakers-2018</span>
                            </Link>
                        </button>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6">
                        <button className={`${styles.speaker_2023}`}>
                            <Link href="/speakers2017">
                                <span className={`${styles.link}`}>Speakers-2017</span>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

            <hr className={`${styles.line}`}></hr>
        </>
    );
}
