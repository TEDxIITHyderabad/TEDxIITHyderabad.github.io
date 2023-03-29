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
      name: 'Aditi Avasthi',
      topic: '',
      imageSrc: 'speakers/2017/Aditi Avasthi.jpg',
      content: "Aditi Avasthi is the Founder and CEO at Embibe.com which is an exciting artificial intelligence platform that is personalising the delivery of education to students in emerging markets with a deep stack on content intelligence using computer vision and machine learning.",
    },
  ];
  const speakers2 = [
    {
      name: 'Anam Hashim',
      topic: '',
      imageSrc: 'speakers/2017/Anam Hashim.jpg',
      content: "Anam Hashim is a professional bike stunt performer and freestyle stunt rider, and India's only female street-bike freestyle athlete. She also runs an organisation to promote Stunt Riding and Adventure Sports in India. She is breaking stereotypes in a male-dominated profession and is a youth icon in her own right.",
    },
  ];
  const speakers3 = [
    {
      name: 'Arpan Shah',
      topic: '',
      imageSrc: 'speakers/2017/Arpan Shah.jpg',
      content: "Arpan Shah is a technologist, investor and data scientist based in California. A graduate of Stanford University, Arpan specializes in Systems and Data. He is currently head of data at Robinhood, one of the most successful Fintech companies in the Bay Area, and also advises and invests in startups with his investment firm in India.",
    },
  ];
  const speakers4 = [
    {
      name: 'Bari Anwar',
      topic: '',
      imageSrc: 'speakers/2017/Bari Anwar.jpg',
      content: "Bari Anwar, better known as ZeDDisbug, is one of the first Indian e-sportsmen. Soon after college, he went on to captain “Beyond Infinity” - undoubtedly the best Dota 2 team from India. Becoming a professional gamer in India was not an easy choice, however, and he has been championing e-sports and awareness about gaming throughout his career.",
    },
  ];
   const speakers6 = [
     {
       name: 'Prof. BM Hegde',
       topic: '',
       imageSrc: 'speakers/2017/Prof. BM Hegde.jpg',
       content: "Professor B.M. Hegde is a medical scientist, educationist and author who has contributed immensely in the field of healthcare medical science, and is known for his holistic approach. He has been bestowed the prestigious Padma Bhushan award in 2010. He works towards putting together a system of medical care delivery which is authentic, inexpensive, patient friendly and easily accessible.",
     },
   ];
const speakers5 = [
    {
      name: 'KK Senthil Kumar',
      topic: '',
      imageSrc: 'speakers/2017/KK Senthil Kumar.jpg',
      content: "KK Senthil Kumar is the award winning cinematographer behind movies like the Bahubali saga, Magadheera, Eega and Arundhati. Known for his grand setups and large scale action sequences, He received SIIMA award for Best Cinematographer for Eega. Senthil has blurred the line between VFX and Reality in his movies and has received critical acclaim for his work.",
    },
  ];


   const speakers7 = [
     {
       name: 'Rajaram Bojji',
       topic: '',
       imageSrc: 'speakers/2017/Rajaram Bojji.jpg',
       content: "Mr. Rajaram Bojji is the inventor of revolutionary 'skybus metro’, a technologist and conceptualiser. He has worked as the MD and CEO of the Konkan Railway corporation (India). He has worked on field operations and research and development in the Indian railways, and was a consultant to many countries. His work has been instrumental in improving the reliability and safety of the railways at a low cost.",
     },
   ];
const speakers8 = [
    {
      name: 'Richa Singh',
      topic: '',
      imageSrc: 'speakers/2017/Richa Singh.jpg',
      content: "Richa Singh is the Co-founder of yourdost.com. Graduating from IIT Guwahati, she began her company, which is an emotional support system for people to discuss problems with qualified and experienced individuals, in anonymity. She is a young entrepreneur wanting to change the stigma around seeking emotional well-being in the world.",
    },
  ];
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
           {/* <SpeakersPage /> */}
        </div>
        <section className={style.main_content}>
          <div className={style.heading}>
            Past Speakers
          </div>
          <div className={style.year}>2017</div>

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
                            Aditi Avasthi is the Founder and CEO at Embibe.com which is an exciting artificial intelligence platform that is personalising the delivery of education to<span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                            Anam Hashim is a professional bike stunt performer and freestyle stunt rider, and India's only female street-bike freestyle athlete. She also runs <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                            Arpan Shah is a technologist, investor and data scientist based in California. A graduate of Stanford University, Arpan specializes in Systems and Data. <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                            Bari Anwar, better known as "ZeDDisbug", is one of the first Indian e-sportsmen. Soon after college, he went on to captain “Beyond Infinity” - undoubtedly <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                            KK Senthil Kumar is the award winning cinematographer behind movies like the Bahubali saga, Magadheera, Eega and Arundhati. Known for his grand In<span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {speakers6.map((speaker) => (
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
                            Professor B.M. Hegde is a medical scientist, educationist and author who has contributed immensely in the field of healthcare medical science, and is known for <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                            Mr. Rajaram Bojji is the inventor of revolutionary 'skybus metro’, a technologist and conceptualiser. He has worked as the MD and CEO of the Konkan Railway  <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
                            Richa Singh is the Co-founder of yourdost.com. Graduating from IIT Guwahati, she began her company, which is an emotional support system for people<span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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