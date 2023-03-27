import Head from 'next/head'
import Footer from '../components/Footer'
import NavbarComp from '../components/Navbar'
import styles from '../styles/Partners.module.css'
import { partners } from './/list_of_partners'

export default function Speakers() {
    return (
        <div class={styles.partners_main}>
            <NavbarComp />            

            <div className={styles.sponsers}>
                <img src="/sponsors/sponsersbg1.png" className={styles.sponser_bg} />
                <div className={styles.title} style={{ textTransform: "uppercase" }}>TITLE SPONSERS</div>
                <div className={styles.sponserslist}>
                    <div className={styles.sponseritem}>
                        <img src="/sponsors/prepp.png" />
                        <p color="black"> Prepp</p>
                    </div>
                    <div className={styles.sponseritem}>
                        <img src="/sponsors/prepp.png" />
                        <p color="black"> Prepp</p>
                    </div>
                </div>
            </div>

            <div className={styles.sponsers}>
                <div className={styles.title} style={{ textTransform: "uppercase" }}>SILVER SPONSERS</div>
                <div className={styles.sponserslist}>
                    <div className={styles.sponseritem}>
                        <img src="/sponsors/prepp.png" />
                        <p color="black"> Prepp</p>
                    </div>
                    <div className={styles.sponseritem}>
                        <img src="/sponsors/prepp.png" />
                        <p color="black"> Prepp</p>
                    </div>
                </div>
            </div>

            <div className={styles.sponsers}>
                <div className={styles.title} style={{ textTransform: "uppercase" }}>BRONZE SPONSERS</div>
                <div className={styles.sponserslist}>
                    <div className={styles.sponseritem}>
                        <img src="/sponsors/prepp.png" />
                        <p color="black"> Prepp</p>
                    </div>
                    <div className={styles.sponseritem}>
                        <img src="/sponsors/prepp.png" />
                        <p color="black"> Prepp</p>
                    </div>
                </div>
            </div>
            <div className={styles.sponsers}>
                <div className={styles.title} style={{ textTransform: "uppercase" }}>SILVER SPONSERS</div>
                <div className={styles.sponserslist}>
                    <div className={styles.sponseritem}>
                        <img src="/sponsors/prepp.png" />
                        <p color="black"> Prepp</p>
                    </div>
                    <div className={styles.sponseritem}>
                        <img src="/sponsors/prepp.png" />
                        <p color="black"> Prepp</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}