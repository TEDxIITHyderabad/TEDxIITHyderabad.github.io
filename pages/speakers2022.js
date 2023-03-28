import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SpeakersPage from '../components/speakersnavbar'
import style from '../styles/Speakersupcoming.module.css'
import styles from '../styles/Speakers.module.css'
import React, { useState } from "react" // import useState hook
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Upcomingspeakers() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const handleReadMoreClick = (speaker) => {
    setSelectedSpeaker(speaker);
    setModalIsOpen(true);
  }

  const speakers1 = [
    {
      name: 'Anju Arora',
      topic: 'Co-founder of The Period Hub',
      imageSrc: 'speakers/2022/Copy of Anju Arora.jpg',
      content: "Anju is the director of The Period Hub, an organisation that works with sustainable menstrual health and hygiene. They strive to eradicate menstrual taboos and provide sustainable, natural, and holistic period care to menstruators..",
    },
  ];
  const speakers2 = [
    {
      name: 'Chirantana Kar',
      topic: 'WASH professional',
      imageSrc: 'speakers/2022/Copy of Chirantana 2.jpg',
      content: "Chirantana has a Double Masters in Environmental Sciences and Resources. She is a WASH professional and has exclusively worked in implementing developmental projects in Rural areas and Urban Slums. She was selected for the prestigious International Visitor Leadership program(IVLP) for the year 2015 by the US Consulate Hyderabad and represented India in Washington She is also the Co Founder of Period Hub pvt Ltd, a Menstrual Wellness platform.",
    },
  ];
  const speakers3 = [
    {
      name: 'Leena Haldar',
      topic: 'Cancer survivor and emotional wellness coach',
      imageSrc: 'speakers/2022/Copy of Leena Haldar 1.jpg',
      content: "Leena R Haldar is a workshop leader and an emotional wellness coach who has been facilitating transformational workshops for over a decade now. Certified by the Hay House, USA, to lead Heal Your Life workshops, Leena, is also a trainer of Emotional Freedom Techniques (EFT). As a cancer warrior, she works to give back to society by leading wellness programs for cancer patients, survivors and care-givers through her initiative Canservelove. Her vision is to bring about an emotional wellness revolution so people can experience peace and to launch an emotional wellness routine in schools as she believes that most issues get sorted if we catch them young",
    }
  ];
   const speakers4 = [
     {
       name: 'Nupur Agarwal',
       topic: 'Co founder of Kiwi Kisan Window',
       imageSrc: 'speakers/2022/Copy of Nupur Agarwal0.jpg',
       content: "Nupur is the co-founder of KIWI Kisan Window, a fair trade organic food brand that has tie ups with International business in UAE and Europe. She is a social entrepreneur and works towards achieving social equality and development of the society. She also founded the evolve foundation, an ecosystem that provides socio economic benefit to rural india and uplifts environmental and cultural awarness in urban india via various handmade organic products.",
     }
   ];
  // const speakers6 = [
  //   {
  //     name: 'Yasaswini Jonnalagadda',
  //     topic: 'Global Issues',
  //     imageSrc: 'speakers/2022/Copy of Yasaswini copy.jpg',
  //     content: "How much can we, as a society, be self-reliant? Yasaswini Jonnalagadda's story from being an electrical engineer and an MBA graduate to a committed social worker who roots for compassion to change the world is an exploration of this question. During the pandemic, her efforts to help the needy became a foundational learning experience to envision social welfare through self-sustenance. This is the story of one woman and her pursuit to make lives better by enabling self-reliance and sustainability at the grassroots level. It is a lesson in distilling opportunities out of obstacles.",
  //   }
  // ];
  const speakers5 = [{
    name: 'Srinivas Prabhu Sangam',
    topic: 'Head of HR for Netcracker',
    imageSrc: 'speakers/2022/Copy of Srinivas Prabhu.jpg',
    content: 'Srinivas is the Head of HR for Netcracker, a wholly-owned subsidiary of NEC. He leads all the HR functions for an employee base of over 3500 and growing. In the past, he worked with Corporations like Hewlett Packard, Thomson Reuters, and Polycom, with specific expertise in aligning business strategy with HR interventions, initiatives, and programs. He holds a Masters degree from Ecole de Management, Grenoble, France, with a specific focus on International Business.',
  }];


  // const speakers7 = [{
  //   name: 'Yasaswini Jonnalagadda',
  //   topic: 'Global Issues',
  //   imageSrc: 'speakers/2022/Copy of Anju Arora.jpg',
  //   content: "How much can we, as a society, be self-reliant? Yasaswini Jonnalagadda's story from being an electrical engineer and an MBA graduate to a committed social worker who roots for compassion to change the world is an exploration of this question. During the pandemic, her efforts to help the needy became a foundational learning experience to envision social welfare through self-sustenance. This is the story of one woman and her pursuit to make lives better by enabling self-reliance and sustainability at the grassroots level. It is a lesson in distilling opportunities out of obstacles.",
  // }];
  const speakers8 = [{
    name: 'Yasaswini Jonnalagadda',
    topic: 'Social worker and director of DeepStack Software',
    imageSrc: 'speakers/2022/Copy of Yasaswini copy.jpg',
    content: "Yasaswini is a social worker and the director of DeepStack Software. She launched ‘Project Prisha,’ an initiative aimed at enabling women to set up small-scale businesses such as establishing flour mills, shops, and pushcarts intended to boost self-reliance among women belonging to the disadvantaged end of the socioeconomic spectrum.",
  }];
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>TEDx IITHyderabad</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div> <Navbar /></div>
      <section className={style.body}>
        <div style={{ paddingTop: "25px" }}>
          <SpeakersPage />
        </div>
        <section className={style.main_content}>
          <div className={style.heading}>
            Past Speakers
          </div>
          <div className={style.year}>2022</div>

          {/* Speaker Section Begin */}
          <section className={styles.speaker_section_spad}>
            <div className="container my-custom-container">
              <div className="row">
                {speakers1.map((speaker) => (
                  <div className="col-xl-6" key={speaker.name}>
                    <div className={styles.speaker_item}>
                      <div className="row">
                        <div className="col-md-6 col-lg-5">
                          <div className={styles.si_pic}>
                            <img src={speaker.imageSrc} alt="" width={350} height={350} />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-7">
                          <div className={styles.si_text}>
                            <div className={styles.si_title}>
                              <h4>{speaker.name}</h4>
                              <p>{speaker.topic}</p>
                            </div>
                            <p>
                            Anju is the director of The Period Hub, an organisation that works with sustainable menstrual health and hygiene. They strive to eradicate menstrual <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {speakers2.map((speaker) => (
                  <div className="col-xl-6" key={speaker.name} >
                    <div className={styles.speaker_item}>
                      <div className="row">
                        <div className="col-md-6 col-lg-5">
                          <div className={styles.si_pic}>
                            <img src={speaker.imageSrc} alt="" width={350} height={350} />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-7">
                          <div className={styles.si_text}>
                            <div className={styles.si_title}>
                              <h4>{speaker.name}</h4>
                              <p>{speaker.topic}</p>
                            </div>
                            <p>
                            Chirantana has a Double Masters in Environmental Sciences and Resources. She is a WASH professional and has exclusively worked in implementing developmental  <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {speakers3.map((speaker) => (
                  <div className="col-xl-6" key={speaker.name} >
                    <div className={styles.speaker_item}>
                      <div className="row">
                        <div className="col-md-6 col-lg-5">
                          <div className={styles.si_pic}>
                            <img src={speaker.imageSrc} alt="" width={350} height={350} />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-7">
                          <div className={styles.si_text}>
                            <div className={styles.si_title}>
                            <h4>{speaker.name}</h4>
                              <p>{speaker.topic}</p>
                            </div>
                            <p>
                            Leena R Haldar is a workshop leader and an emotional wellness coach who has been facilitating transformational workshops for over a decade now. Certified by the Hay <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {speakers4.map((speaker) => (
                  <div className="col-xl-6" key={speaker.name} >
                    <div className={styles.speaker_item}>
                      <div className="row">
                        <div className="col-md-6 col-lg-5">
                          <div className={styles.si_pic}>
                            <img src={speaker.imageSrc} alt="" width={350} height={350} />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-7">
                          <div className={styles.si_text}>
                            <div className={styles.si_title}>
                            <h4>{speaker.name}</h4>
                              <p>{speaker.topic}</p>
                            </div>
                            <p>
                            Nupur is the co-founder of KIWI Kisan Window, a fair trade organic food brand that has tie ups with International business in UAE and Europe. She is a social <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {speakers5.map((speaker) => (
                  <div className="col-xl-6" key={speaker.name} >
                    <div className={styles.speaker_item}>
                      <div className="row">
                        <div className="col-md-6 col-lg-5">
                          <div className={styles.si_pic}>
                            <img src={speaker.imageSrc} alt="" width={350} height={350} />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-7">
                          <div className={styles.si_text}>
                            <div className={styles.si_title}>
                            <h4>{speaker.name}</h4>
                              <p>{speaker.topic}</p>
                            </div>
                            <p>
                            Srinivas is the Head of HR for Netcracker, a wholly-owned subsidiary of NEC. He leads all the HR functions for an employee base of over 3500 and growing. In<span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* {speakers6.map((speaker) => (
                  <div className="col-xl-6" key={speaker.name} >
                    <div className={styles.speaker_item}>
                      <div className="row">
                        <div className="col-md-6 col-lg-5">
                          <div className={styles.si_pic}>
                            <img src="speakers/2022/Copy of Yasaswini copy.jpg" alt="" width={350} height={350} />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-7">
                          <div className={styles.si_text}>
                            <div className={styles.si_title}>
                              <h4>Yasaswini Jonnalagadda</h4>
                              <p>Topic - Global Issues</p>
                            </div>
                            <p>
                              How much can we, as a society, be self-reliant? Yasaswini Jonnalagadda's story from being an electrical engineer and an MBA graduate to a committed social worker who roots for compassion to change the world is <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {speakers7.map((speaker) => (
                  <div className="col-xl-6" key={speaker.name} >
                    <div className={styles.speaker_item}>
                      <div className="row">
                        <div className="col-md-6 col-lg-5">
                          <div className={styles.si_pic}>
                            <img src="speakers/2022/Copy of Anju Arora.jpg" alt="" width={350} height={350} />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-7">
                          <div className={styles.si_text}>
                            <div className={styles.si_title}>
                              <h4>Yasaswini Jonnalagadda</h4>
                              <p>Topic - Global Issues</p>
                            </div>
                            <p>
                              How much can we, as a society, be self-reliant? Yasaswini Jonnalagadda's story from being an electrical engineer and an MBA graduate to a committed social worker who roots for compassion to change the world is <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))} */}
                {speakers8.map((speaker) => (
                  <div className="col-xl-6" key={speaker.name} >
                    <div className={styles.speaker_item}>
                      <div className="row">
                        <div className="col-md-6 col-lg-5">
                          <div className={styles.si_pic}>
                            <img src={speaker.imageSrc} alt="" width={350} height={350} />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-7">
                          <div className={styles.si_text}>
                            <div className={styles.si_title}>
                            <h4>{speaker.name}</h4>
                              <p>{speaker.topic}</p>
                            </div>
                            <p>
                            Yasaswini is a social worker and the director of DeepStack Software. She launched ‘Project Prisha,’ an initiative aimed at enabling women to set up small-scale<span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Speaker Section End */}
          <Footer />
        </section>
      </section>
      {selectedSpeaker && (
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className={styles.modal_class}>
          <div className={styles.modal_main}>
            <div className={styles.modal_header}>
              <button type="button" className={styles.close} onClick={() => setModalIsOpen(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <div className={styles.modal_body}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5 col-xl-5">
                      <img src={selectedSpeaker.imageSrc} className={styles.modal_image} alt="" width={350} height={350} />
                    </div>
                    <div className="col-lg-7 col-xl-7">
                      <h4>{selectedSpeaker.name}</h4>
                      <h6>{selectedSpeaker.topic}</h6>
                      <p>{selectedSpeaker.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}