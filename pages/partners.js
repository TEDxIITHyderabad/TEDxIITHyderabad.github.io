import Head from 'next/head'
import Footer from '../components/Footer'
import NavbarComp from '../components/Navbar'
import styles from '../styles/Partners.module.css'
import { partners } from './/list_of_partners'
import Link from 'next/link'
import { useRouter } from 'next/router';


export default function Speakers() {
    const router = useRouter();
  
    const handleClick = () => {
      router.push('contactus');
    };
    return (
        <div class={styles.partners_main}>
            <NavbarComp />            
            <div className={styles.background_image}>
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
            <div className={styles.reasons}>
                <div className={styles.head_container}>
                    <h2 className={styles.head_content}>Reasons To Partner with us</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <img src="./sponsors/reasonstoattend.png" className={styles.reasons_image}></img>
                            <p className={styles.reason_heading}>typesetting industry</p>
                            <p className={styles.reason_content}>is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <img src="./sponsors/reasonstoattend.png" className={styles.reasons_image}></img>
                            <p className={styles.reason_heading}>typesetting industry</p>
                            <p className={styles.reason_content}>is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                        <div className="col-lg-4">
                            <img src="./sponsors/reasonstoattend.png" className={styles.reasons_image}></img>
                            <p className={styles.reason_heading}>typesetting industry</p>
                            <p className={styles.reason_content}>is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>
                </div>

                <button className={styles.buttons} onClick={handleClick}>CONTACT NOW
                    </button>

            </div>
            <Footer />
            </div>
        </div>
    )
}