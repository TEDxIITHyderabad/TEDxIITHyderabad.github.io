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
                        <img src={partners['TITLE SPONSOR'][0].image} alt={partners['TITLE SPONSOR'][0].name}/>
                        <p color="black"> {partners['TITLE SPONSOR'][0].name}</p>
                    </div>
                    {/* <div className={styles.sponseritem}>
                        <img src={partners[][0].image} alt={partners[][0].name}/>
                        <p color="black"> {partners[][0].name}</p>
                    </div>
                </div> */}
            </div>

            <div className={styles.sponsers}>
                <div className={styles.title} style={{ textTransform: "uppercase" }}>SILVER SPONSERS</div>
                <div className={styles.sponserslist}>
                    <div className={styles.sponseritem}>
                        <img src={partners['SILVER SPONSOR'][0].image} alt={partners['SILVER SPONSOR'][0].name}/>
                        <p color="black"> {partners['SILVER SPONSOR'][0].name}</p>
                    </div>
                    {/* <div className={styles.sponseritem}>
                        <img src={partners[][0].image} alt={partners[][0].name}/>
                        <p color="black"> {partners[][0].name}</p>
                    </div> */}
                </div>
            </div>

            <div className={styles.sponsers}>
                <div className={styles.title} style={{ textTransform: "uppercase" }}>BRONZE SPONSERS</div>
                <div className={styles.sponserslist}>
                    <div className={styles.sponseritem}>
                        <img src={partners['BRONZE SPONSOR'][0].image} alt={partners['BRONZE SPONSOR'][0].name}/>
                        <p color="black"> {partners['BRONZE SPONSOR'][0].name}</p>
                    </div>
                    <div className={styles.sponseritem}>
                        <img src={partners['BRONZE SPONSOR'][1].image} alt={partners['BRONZE SPONSOR'][1].name}/>
                        <p color="black"> {partners['BRONZE SPONSOR'][1].name}</p>
                    </div>
                </div>
            </div>
            <div className={styles.sponsers}>
                <div className={styles.title} style={{ textTransform: "uppercase" }}>MERCHANDISE SPONSERS</div>
                <div className={styles.sponserslist}>
                    <div className={styles.sponseritem}>
                        <img src={partners['MERCHANDISE PARTNER'][0].image} alt={partners['MERCHANDISE PARTNER'][0].name}/>
                        <p color="black"> {partners['MERCHANDISE PARTNER'][0].name}</p>
                    </div>
                    {/* <div className={styles.sponseritem}>
                        <img src={partners['MERCHANDISE PARTNER'][1].image} alt={partners['MERCHANDISE PARTNER'][1].name}/>
                        <p color="black"> {partners['MERCHANDISE PARTNER'][1].name}</p>
                    </div> */}
                </div>
            </div>
            <div className={styles.sponsers}>
                <div className={styles.title} style={{ textTransform: "uppercase" }}>WELLNESS SPONSERS</div>
                <div className={styles.sponserslist}>
                    <div className={styles.sponseritem}>
                        <img src={partners['WELLNESS PARTNER'][0].image} alt={partners['WELLNESS PARTNER'][0].name}/>
                        <p color="black"> {partners['WELLNESS PARTNER'][0].name}</p>
                    </div>
                    {/* <div className={styles.sponseritem}>
                        <img src={partners[][0].image} alt={partners[][0].name}/>
                        <p color="black"> {partners[][0].name}</p>
                    </div> */}
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}