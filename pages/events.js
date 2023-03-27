import Head from 'next/head'
import Footer from '../components/Footer'
import NavbarComp from '../components/Navbar'
import styles from '../styles/Events.module.css'
import React, { useState } from 'react';
import { speakers } from './/list_of_upcoming_speakers.js';

export default function Speakers() {
    console.log(speakers);
    const about_ted = ['TED - Technology, Entertainment and Design. The story of TED has humble origins, a one-off conference in 1984 about compact disks, e-books and mapping coastlines using fractals. Slowly, the choice of panelists was expanded to include business tycoons, scientists, philosophers, religious and spiritual leaders and many others. TED, now, stands out as one the most unique, creative and intellectual highlights globally. TED also gave birth to a plethora of many sister events - TED-Ed, a medium of education through captivating animations, TEDGlobal - a global conference held at different locations in the world, TED Prize - giving the winner a chance to wish and change the world. Although TED had limited speakers and accepted people only with invites, TED has grown to include and accept all people into its family, continuously inspiring and pushing us forward.',
        'TEDx is an initiative of TED to achieve their motto, "ideas worth sharing", to the next level. This initiative allows independent local groups to organize TED events locally and explore the stories, ideas and thoughts of the people around us. TEDx also helps people locally to interact with their heroes and capture the spirit of TED. TEDx organises live events based on a theme and also provides recorded videos of the speakers, reaching out to people globally on the internet. TEDx provides guidlines to the organisers to curate content, create designs and invite speakers in accrodance with the TED guidelines. TEDx creates an oppurtunity to interact with people all across the world. ',
        'TEDxIITHyderabad is an initiative to bring the spirit of TED to the community of IIT Hyderabad. This event provides a gateway for some of the talented individuals at this institution to get inspired and motivated to push their limits and polish coal to synthesize dazzling diamonds. TEDxIITHyderabad, founded in 2015, has since been one of IIT Hyderabad\'s most awaited and excited annual events.'
    ];

    const [about_ted_index, change_about_ted] = useState(0);


    return (
        <div className={styles.events_main}>
            <NavbarComp />
            <div className={styles.main}>
                <img className={styles.hero_image} src="images/background.png" draggable="false" />
                <img className={styles.player} src="images/player.png" />
                <div className={styles.hero_main}>
                    <p className={styles.hero_title}>EVENT<br />INFORMATION</p>
                </div>
            </div>

            <div className={styles.about_ted}>
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
            <div className={styles.theme_head_title}>Theme TEDxIITHyderabad 2023</div>

            <div className={styles.theme_main_cont}>
                <img className={styles.theme_image} src="images/background.jpg" draggable="false" />
                <div className={styles.theme_main}>
                    <p className={styles.theme_title}>SAGA</p>
                    <p className={styles.theme_subtitle}>Weaving humanity's tapestry </p>
                </div>
                <div className={styles.theme_theme_cont}>
                    <p className={styles.theme_theme}>Timely and timeless, humanity is the
                        best of us</p>
                </div>

            </div>
            <hr className={styles.theme_start} />
            <div className={styles.theme_desc}>

                <p>Humanity could be a million years old or just a definition
                    jotted down a few centuries back. That said, homo sapiens
                    have been kicking around a pale blue dot in space for a
                    while now. And while lingering about, we have made a legacy
                    to boast about.</p>
                <p>The rise and fall, the ups and downs, and the meandering
                    turns mankind has taken have been painted and weaved onto
                    the tapestry - our legacy and the proof of our existence in
                    an otherwise unchanging and indifferent universe. People
                    spanning cultures, eras, nationalities, and backgrounds have
                    all contributed their part to compiling the greatest saga of
                    all time. This saga has been visualized, part by part, and
                    time-to-time in tapestries. These tapestries follow the
                    well-known saying: "Pictures speak a thousand words!"</p>
                <p>Join us as we weave together the tapestry of the lives, the
                    ideas, and the revolutions made by transient individuals to
                    make an immortal and magnificent representation of humanity:
                    Humanity's Tapestry...</p>

            </div>
            <hr className={styles.theme_end} />
            <div className={styles.event}>
                <div className={styles.hero_title} style={{ textAlign: "center", margin: "0 0 3% 0" }}>Event Venue </div>
                <div className={styles.event_title} style={{ color: "white" }}>2 April 2023</div>
                <div className={styles.event_title}>10:00am onwards</div>
                <div className={styles.event_address}>Auditorium, Academic Block- A, IIT
                    Hyderabad, kandi, Sangareddy, Telengana, 502284</div>
                <button className={styles.buttons}>BUY EVENT TICKETS NOW</button>
            </div>

            <div className={styles.speakers_head_title}>INTRODUCING OUR SPEAKERS</div>

            <div className={styles.speakers_list}>
                {speakers && speakers.map(speaker =>
                    <div className={styles.speaker_item}>
                        <img src={speaker.image} />
                        <p>{speaker.name}</p>
                        <hr />
                        <p className={styles.speaker_pos}>{speaker.desc}</p>
                        <div className={styles.speaker_desc}>{speaker.about}</div>
                    </div>
                )}
            </div>
            <Footer />
        </div>


    )
}