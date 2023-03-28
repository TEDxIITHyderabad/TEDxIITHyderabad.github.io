import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavbarComp from '../components/Navbar'
import styles from '../styles/AboutUs.module.css'
import Footer from '../components/Footer'
import { useState } from 'react'

const images = [
    { image: '/homepageimg/Rectangle 35.png', width: 350, height: 350 },
    { image: '/homepageimg/Rectangle 36.png', width: 350, height: 350 },
    { image: '/homepageimg/Rectangle 37.png', width: 350, height: 350 },
    { image: '/homepageimg/image 2.png', width: 350, height: 350 },
  ];

export default function AboutUs(){
    const [active, setActive] = useState(0);
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
            <div className={`${styles.intro_box}`}>
                <div className={`${styles.intro_heading}`}>
                    About us
                </div>
                <button
                    className={`bg-transparent rounded-0  ${styles.button}`}
                    onClick={()=>{setActive(0)}}>
                    TED
                </button>
                <button 
                    className={`bg-transparent rounded-0 ${styles.button}`} 
                    style={{marginLeft:"10%"}}
                    onClick={()=>{setActive(1)}}>
                    TEDx
                </button>
                <div className={`${styles.intro_text}`}>
                {(active)?"TED - Technology, Entertainment and Design. The story of TED has humble origins, a one-off conference in 1984 about compact disks, e-books and mapping coastlines using fractals. Slowly, the choice of panelists was expanded to include businessTEDx is an initiative of TED to achieve their motto, \"ideas worth sharing\", to the next level. This initiative allows independent local groups to organize TED events locally and explore the stories, ideas and thoughts of the people around us. TEDx also helps people locally to interact with their heroes and capture the spirit of TED. TEDx organises live events based on a theme and also provides recorded videos of the speakers, reaching out to people globally on the internet. TEDx provides guidlines to the organisers to curate content, create designs and invite speakers in accrodance with the TED guidelines. TEDx creates an oppurtunity to interact with people all across the world. tycoons, scientists, philosophers, religious and spiritual leaders and many others. TED, now, stands out as one the most unique, creative and intellectual highlights globally. TED also gave birth to a plethora of many sister events - TED-Ed, a medium of education through captivating animations, TEDGlobal - a global conference held at different locations in the world, TED Prize - giving the winner a chance to wish and change the world. Although TED had limited speakers and accepted people only with invites, TED has grown to include and accept all people into its family, continuously inspiring and pushing us forward.":"TED - Technology, Entertainment and Design. The story of TED has humble origins, a one-off conference in 1984 about compact disks, e-books and mapping coastlines using fractals. Slowly, the choice of panelists was expanded to include business tycoons, scientists, philosophers, religious and spiritual leaders and many others. TED, now, stands out as one the most unique, creative and intellectual highlights globally. TED also gave birth to a plethora of many sister events - TED-Ed, a medium of education through captivating animations, TEDGlobal - a global conference held at different locations in the world, TED Prize - giving the winner a chance to wish and change the world. Although TED had limited speakers and accepted people only with invites, TED has grown to include and accept all people into its family, continuously inspiring and pushing us forward."}
                
                </div>
            </div>    
            <div className={`${styles.box}`}>
                <div className={`${styles.box_header_container}`}>
                    <div className={`${styles.box_header_text}`}>
                        Our Motto
                    </div>
                </div>
                <div className={`${styles.box_main_text}`}>
                    "Ideas Worth Sharing" : We believe that for humankind to truly progress and achieve our potential, the exchange of ideas between people is essential. TED helps us list the problems people face even in the remotest corners of the world. This promotes discussions to come up with solutions and ideas from pioneers and amateurs in different backgrounds. Most ideas, often end up being ignored or rejected, and even the ones that are accepted are often not implemented. We aim to play our little role in guiding these embryos and nurture them with the hope that they help us progress and march forward.
                </div>
            </div>
            <div className={`${styles.box}`}>
                <div className={`${styles.box_header_container}`}>
                    <div className={`${styles.box_header_text}`}>
                        Our Vision
                    </div>
                </div>
                    <div className={`${styles.box_main_text}`}>
                    At TEDxIITHyderabad, we envision a generation, only bounded by our imagination and dreams. A generation that can play a vital role in the conveyor belt of ideas, entertainment, design and techology. We create oppurtunities for our student and staff to meet the people who got their hands dirty in this conveyor belt and inspire them to get their hands dirty as well.
                    </div>
            </div>
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
                                            Sakshi Jalla
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
