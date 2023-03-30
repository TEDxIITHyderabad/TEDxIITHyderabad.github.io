import Head from 'next/head'
import Footer from '../components/Footer'
import NavbarComp from '../components/Navbar'
import styles from '../styles/Partners.module.css'
import { partners } from '../components/list_of_partners'
import { useRouter } from 'next/router';


export default function Speakers() {
    const router = useRouter();
  
    const handleClick = () => {
      router.push('contactus');
    };
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <title>TEDx IITHyderabad | Partners</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div class={styles.partners_main}>
                <NavbarComp />            
                <div className={styles.background_image}>
                <div className={styles.sponsers}>
                    <img src="/sponsors/sponsersbg1.png" className={styles.sponser_bg} />
                    <div className={styles.title} style={{ textTransform: "uppercase" }}>TITLE SPONSOR</div>
                    <div className={styles.sponserslist}>
                        <div className={styles.sponseritem}>
                        <a className={styles.sic} href="https://sic.iith.ac.in/#page-top"><img src={partners['TITLE SPONSOR'][0].image} alt={partners['TITLE SPONSOR'][0].name}/>
                            <p color="black">{partners['TITLE SPONSOR'][0].name} </p>
                            </a>
                        </div>
                </div>
                
                <div className={styles.sponsers}>
                    <div className={styles.title} style={{ textTransform: "uppercase" }}>GOLD SPONSORS</div>
                    <div className={styles.sponserslist}>
                        <div className={styles.sponseritem}>
                            <img src={partners['GOLD SPONSOR'][0].image} alt={partners['GOLD SPONSOR'][0].name}/>
                            <p color="black"> {partners['GOLD SPONSOR'][0].name}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.sponsers}>
                    <div className={styles.title} style={{ textTransform: "uppercase" }}>SILVER SPONSORS</div>
                    <div className={styles.sponserslist}>
                        <div className={styles.sponseritem}>
                            <img src={partners['SILVER SPONSOR'][0].image} alt={partners['SILVER SPONSOR'][0].name}/>
                            <p color="black"> {partners['SILVER SPONSOR'][0].name}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.sponsers}>
                    <div className={styles.title} style={{ textTransform: "uppercase" }}>BRONZE SPONSORS</div>
                    <div className={styles.sponserslist}>
                        <div className={styles.sponseritem}>
                            <img src={partners['BRONZE SPONSOR'][0].image} alt={partners['BRONZE SPONSOR'][0].name}/>
                            <p color="black"> {partners['BRONZE SPONSOR'][0].name}</p>
                        </div>
                        <div className={styles.sponseritem}>
                            <img src={partners['BRONZE SPONSOR'][1].image} alt={partners['BRONZE SPONSOR'][1].name}/>
                            <p color="black"> {partners['BRONZE SPONSOR'][1].name}</p>
                        </div>
                        <div className={styles.sponseritem}>
                            <img src={partners['BRONZE SPONSOR'][2].image} alt={partners['BRONZE SPONSOR'][2].name}/>
                            <p color="black"> {partners['BRONZE SPONSOR'][2].name}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.sponsers}>
                    <div className={styles.title} style={{ textTransform: "uppercase" }}>MERCHANDISE PARTNER</div>
                    <div className={styles.sponserslist}>
                        <div className={styles.sponseritem}>
                            <img src={partners['MERCHANDISE PARTNER'][0].image} alt={partners['MERCHANDISE PARTNER'][0].name}/>
                            <p color="black"> {partners['MERCHANDISE PARTNER'][0].name}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.sponsers}>
                    <div className={styles.title} style={{ textTransform: "uppercase" }}>WELLNESS PARTNER</div>
                    <div className={styles.sponserslist}>
                        <div className={styles.sponseritem}>
                            <img src={partners['WELLNESS PARTNER'][0].image} alt={partners['WELLNESS PARTNER'][0].name}/>
                            <p color="black"> {partners['WELLNESS PARTNER'][0].name}</p>
                        </div>
                    </div>
                </div>
                </div>
                <Footer />
                </div>
            </div>
        </>
    )
}
