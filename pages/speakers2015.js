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
      name: 'Dr Ananda Shankar Jayant',
      topic: '',
      imageSrc: 'speakers/2015/ananda shankar jayant.jpg',
      content: "Dr Ananda Shankar Jayant, is celebrated as one of India’s leading classical dancers, choreographers and dance scholars. Ananda’s TED talk is ranked as one of 50 Amazingly Motivational talks on Youtube as well as one of 12 Incredible TED talks on cancer. Now she talks about a new perspective on Ideas Behind The Horizon",
    },
  ];
  const speakers2 = [
    {
      name: 'Dr V K Saraswat',
      topic: '',
      imageSrc: 'speakers/2015/VK Saraswat.jpg',
      content: "An Engineer, Scientist, Visionary and a leader. who formerly served as the Director General of the Defence Research and Development Organisation of India and the Chief Scientific Advisor to the Indian Minister of Defence.Who with his experience has given a new perspective towards Sustainable Development. ",
    },
  ];
  const speakers3 = [
    {
      name: 'Neeraj Jain',
      topic: '',
      imageSrc: 'speakers/2015/Neeraj Jain.jpg',
      content: "",
    },
  ];
  const speakers4 = [
    {
      name: 'Subhas Chandra',
      topic: '',
      imageSrc: 'speakers/2015/Subhas Chandra.png',
      content: "",
    },
  ];
//   const speakers6 = [
//     {
//       name: '',
//       topic: '',
//       imageSrc: 'speakers/2015/.jpg',
//       content: "",
//     },
//   ];
// const speakers5 = [
//     {
//       name: '',
//       topic: '',
//       imageSrc: 'speakers/2015/.jpg',
//       content: "",
//     },
//   ];


//   const speakers7 = [
//     {
//       name: '',
//       topic: '',
//       imageSrc: 'speakers/2015/.jpg',
//       content: "",
//     },
//   ];
// const speakers8 = [
//     {
//       name: '',
//       topic: '',
//       imageSrc: 'speakers/2015/.jpg',
//       content: "",
//     },
//   ];
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
          <div className={style.year}>2015</div>

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
                            Dr Ananda Shankar Jayant, is celebrated as one of India’s leading classical dancers, choreographers and dance scholars. Ananda’s TED talk is<span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                            An Engineer, Scientist, Visionary and a leader. who formerly served as the Director General of the Defence Research and Development Organisation of India<span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                            {/* <p>
                           <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
                            </p> */}
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
                            {/* <p>
                           <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
                            </p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* {speakers5.map((speaker) => (
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
                ))} */}
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
                {/* {speakers8.map((speaker) => (
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
                ))} */}
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