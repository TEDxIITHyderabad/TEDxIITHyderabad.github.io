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
    const about_ted = ['TED - Technology, Entertainment and Design. The story of TED has humble origins, a one-off conference in 1984 about compact disks, e-books and mapping coastlines using fractals. Slowly, the choice of panelists was expanded to include business tycoons, scientists, philosophers, religious and spiritual leaders and many others. TED, now, stands out as one the most unique, creative and intellectual highlights globally. TED also gave birth to a plethora of many sister events - TED-Ed, a medium of education through captivating animations, TEDGlobal - a global conference held at different locations in the world, TED Prize - giving the winner a chance to wish and change the world. Although TED had limited speakers and accepted people only with invites, TED has grown to include and accept all people into its family, continuously inspiring and pushing us forward.',
    'TEDx is an initiative of TED to achieve their motto, "ideas worth sharing", to the next level. This initiative allows independent local groups to organize TED events locally and explore the stories, ideas and thoughts of the people around us. TEDx also helps people locally to interact with their heroes and capture the spirit of TED. TEDx organises live events based on a theme and also provides recorded videos of the speakers, reaching out to people globally on the internet. TEDx provides guidlines to the organisers to curate content, create designs and invite speakers in accrodance with the TED guidelines. TEDx creates an oppurtunity to interact with people all across the world. ',
    'TEDxIITHyderabad is an initiative to bring the spirit of TED to the community of IIT Hyderabad. This event provides a gateway for some of the talented individuals at this institution to get inspired and motivated to push their limits and polish coal to synthesize dazzling diamonds. TEDxIITHyderabad, founded in 2015, has since been one of IIT Hyderabad\'s most awaited and excited annual events.'
    ];
    const [active, setActive] = useState(0);

    const [about_ted_index, change_about_ted] = useState(0);

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
        <div className={styles.intro_box}>
                <div className={`${styles.intro_heading}`}>
                    About us
                </div>
                    <div className={styles.ted_buttons}>
                        <div className={styles.ted_button_wrap} onClick={(e) => { change_about_ted(0); }}>
                            <div className={`${styles.ted_button} ${about_ted_index == 0 ? styles.selected : styles.ted_button}`}>TED</div>
                        </div>
                        <div className={styles.ted_button_wrap} onClick={() => { change_about_ted(1) }}>
                            <div className={`${styles.ted_button} ${about_ted_index == 1 ? styles.selected : styles.ted_button}`}>TEDx</div>
                        </div>
                        <div className={styles.ted_button_wrap} onClick={(e) => { change_about_ted(2); }}>
                            <div className={`${styles.ted_button} ${about_ted_index == 2 ? styles.selected : styles.ted_button}`}>TEDxIITHyderabad</div>
                        </div>
                    </div>

                    <div className={styles.about_ted_desc}>{about_ted[about_ted_index]}
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
        <Footer/>
        </div>
        </>
    )
}
