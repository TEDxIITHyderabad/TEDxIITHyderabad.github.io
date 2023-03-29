import Head from 'next/head'
import NavbarComp from '../components/Navbar'
import styles from '../styles/Team.module.css'
import Footer from '../components/Footer'


export default function AboutUs(){
    return (
        <>
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <title>TEDx IITHyderabad | About Us</title>
            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <div className={styles.background}>
        <NavbarComp/>
            <div className={`${styles.team_box}`}>
                <div className={`${styles.team_box_header}`}>
                    TEAM
                </div>
                <div className={`${styles.team_box_main}`}>
                    Heads
                    <div className={`${styles.team_box_main_grid}`}>
                        <div className='row'>
                            <div className={`col-12 col-md-6`} >
                                <div className={`${styles.team_box_main_grid_item_head}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Cores/mahati chittem.jpg"  alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                                Mahati Chittem
                                            </div>
                                            <div className={`${styles.image_position}`}>
                                                Faculty in Charge
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6`}>
                                <div className={`${styles.team_box_main_grid_item_head}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Cores/Poorvika C.jpg"  alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                                Poorvika C
                                            </div>
                                            <div className={`${styles.image_position}`}>
                                                Overall Head and Licensee
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.team_box_main}`} style={{marginTop:"200px"}}>
                    Core Team
                    <div className={`${styles.team_box_main_grid}`}>
                        <div className='row'>
                            <div className={`col-12  col-md-6 col-lg-4 `}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Cores/Ritik.jpg" alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                                Ritik
                                            </div>
                                            <div className={`${styles.image_position}`}>
                                                Branding & Design Core
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 `} >
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Cores/Madhuri Annavazzala .jpeg"     alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Madhuri Annavazzala
                                            </div>
                                            <div className={`${styles.image_position}`}>
                                            Content & Curation Core
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 `}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Cores/Vikhyath.jpg" alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Vikhyath
                                            </div>
                                            <div className={`${styles.image_position}`}>
                                            Experience & Hospitality Core
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 `} style={{marginLeft:"auto"}}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Cores/Prakhar Patni.jpg"  alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Prakhar Patni
                                            </div>
                                            <div className={`${styles.image_position}`}>
                                            Finance & Sponsorship
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 `} style={{marginRight:"auto"}}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Cores/Gowri Govindaraj .JPG" alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Gowri Govindaraj
                                            </div>
                                            <div className={`${styles.image_position}`}>
                                            Marketing & Sales
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.team_box_main}`} style={{marginTop:"200px"}}>
                    Branding & Design
                    <div className={`${styles.team_box_main_grid}`}>
                        <div className='row'>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Branding&Design/Ambady Ravi .jpg" width={300} alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                                Ambady Ravi
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3 `}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Branding&Design/Ansh Agarwal.jpeg"  alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Ansh Agarwal
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3 `}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Branding&Design/Athul krishna.jpg" width={300} alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Athul Krishna
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3 `}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Branding&Design/Gatikrushna Mohapatra.jpg"  alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Gatikrushna Mohapatra
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3 `} style={{marginLeft:"auto"}}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Branding&Design/IMG_20220716_181055_Bokeh.jpg" width={300} alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Shiksha Jalla
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3 `}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Branding&Design/Pracheet Padher.jpeg" width={300} alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Pracheet Padher
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3 `} style={{marginRight:"auto"}}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Branding&Design/Trisha_Patidar.jpg"  alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Trisha Patidar
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className={`${styles.team_box_main}`} style={{marginTop:"200px"}}>
                    Content and Curation
                    <div className={`${styles.team_box_main_grid}`}>
                        <div className='row'>
                        <div className={`col-12 col-md-6 col-lg-4 col-xl-3`}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Content&Curation/Amulya Tallamraju.jpg" width={300} alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Amulya Tallamraju
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Content&Curation/Hitesh Donepudi .jpg"  alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Hitesh Donepudi
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Content&Curation/Ishita Dingare.png" width={300} alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Ishita Dingare
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Content&Curation/Karthik M Nambiar.JPG"  alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Karthik M Nambiar
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`} >
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Content&Curation/PrachiSharma.jpg" width={300} alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Prachi Sharma
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Content&Curation/Rishit D.jpg" width={300} alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Rishit D
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`} >
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Content&Curation/Sumedh Kashikar.jpg"  alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Sumedh Kashikar
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`} >
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Content&Curation/Swarangi Tambat.JPG.jpg"  alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Swarangi Tambat
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.team_box_main}`} style={{marginTop:"200px"}}>
                    Experience & Hospitality
                    <div className={`${styles.team_box_main_grid}`}>
                        <div className='row'>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Experience&Hospitality/Aditya Kapilesh .jpg" width={300} alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Aditya Kapilesh
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Experience&Hospitality/AmithReddy.jpg"  alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Amith Reddy
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Experience&Hospitality/Ananda Krishnan .jpg" width={300} alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Ananda Krishnan
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Experience&Hospitality/Kushagra.jpg"  alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Kushagra Gupta
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`} style={{marginLeft:"auto"}}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Experience&Hospitality/Suddhodhan .jpg" width={300} alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Suddhodhan
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Experience&Hospitality/Titeeksha Godambe .jpg" width={300} alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Titeeksha Godambe
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`} style={{marginRight:"auto"}}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Experience&Hospitality/Vedant Kshirsagar .jpg"  alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Vedant Kshirsagar
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className={`${styles.team_box_main}`} style={{marginTop:"200px"}}>
                Finance & Sponsorship
                    <div className={`${styles.team_box_main_grid}`}>
                        <div className='row'>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Finance&Sponsorship/Akshat Jain.jpg"  alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Akshat Jain
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Finance&Sponsorship/Areeb Hussain.JPG"  alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Areeb Hussain
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Finance&Sponsorship/Kartik Katekar.jpg" alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Kartik Katekar
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Finance&Sponsorship/Mouktika.jpg"  alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Mouktika
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`} style={{marginLeft:"auto"}}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Finance&Sponsorship/Niharika Singh.jpg" width={300} alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Niharika Singh
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`} style={{marginRight:"auto"}}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Finance&Sponsorship/Rutv Kocheta.jpeg"  alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Rutv Kocheta
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className={`${styles.team_box_main}`} style={{marginTop:"200px"}}>
                Marketing & Sales 
                    <div className={`${styles.team_box_main_grid}`}>
                        <div className='row'>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Marketing&Sales/Aditya Sridhar.jpg"  alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Aditya Sridhar
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Marketing&Sales/Dhruvin Shah.jpg"  alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Dhruvin Shah
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Marketing&Sales/Krutika Kulkarni .jpg" alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Krutika Kulkarni
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Marketing&Sales/Mahin Bansal.jpeg"  alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Mahin Bansal
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`} style={{marginLeft:"auto"}}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Marketing&Sales/Manas Bhargava .jpg" width={300} alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Manas Bhargava
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-4 col-xl-3`} style={{marginRight:"auto"}}>
                                <div className={`${styles.team_box_main_grid_item}`}>
                                    <div className={`${styles.team_box_main_grid_item_image}`}>
                                        <img src="/team/Coords/Marketing&Sales/Sai Harish Madireddi.jpg"  alt="image"/>
                                    </div>
                                    <div className={`${styles.team_box_main_grid_item_text}`}>
                                        <span style={{transform: "rotate(-180deg)"}}>
                                            <div className={`${styles.image_name}`}>
                                            Sai Harish Madireddiḥ
                                            </div>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
        </>
    )
}
