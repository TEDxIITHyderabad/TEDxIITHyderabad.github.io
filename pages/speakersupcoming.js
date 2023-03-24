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
      name: 'Yasaswini Jonnalagadda',
      topic: 'Global Issues',
      imageSrc: 'speakers/2022/Copy of Anju Arora.jpg',
      content: "How much can we, as a society, be self-reliant? Yasaswini Jonnalagadda's story from being an electrical engineer and an MBA graduate to a committed social worker who roots for compassion to change the world is an exploration of this question. During the pandemic, her efforts to help the needy became a foundational learning experience to envision social welfare through self-sustenance. This is the story of one woman and her pursuit to make lives better by enabling self-reliance and sustainability at the grassroots level. It is a lesson in distilling opportunities out of obstacles.",
    },
  ];
  const speakers2 = [
    {
      name: 'Yasaswini Jonnalagadda',
      topic: 'Global Issues',
      imageSrc: 'speakers/2022/Copy of Chirantana 2.jpg',
      content: "How much can we, as a society, be self-reliant? Yasaswini Jonnalagadda's story from being an electrical engineer and an MBA graduate to a committed social worker who roots for compassion to change the world is an exploration of this question. During the pandemic, her efforts to help the needy became a foundational learning experience to envision social welfare through self-sustenance. This is the story of one woman and her pursuit to make lives better by enabling self-reliance and sustainability at the grassroots level. It is a lesson in distilling opportunities out of obstacles.",
    },
  ];
  const speakers3 = [
    {
      name: 'Yasaswini Jonnalagadda',
      topic: 'Global Issues',
      imageSrc: 'speakers/2022/Copy of Leena Haldar 1.jpg',
      content: "How much can we, as a society, be self-reliant? Yasaswini Jonnalagadda's story from being an electrical engineer and an MBA graduate to a committed social worker who roots for compassion to change the world is an exploration of this question. During the pandemic, her efforts to help the needy became a foundational learning experience to envision social welfare through self-sustenance. This is the story of one woman and her pursuit to make lives better by enabling self-reliance and sustainability at the grassroots level. It is a lesson in distilling opportunities out of obstacles.",
    }
  ];
  const speakers4 = [
    {
      name: 'Yasaswini Jonnalagadda',
      topic: 'Global Issues',
      imageSrc: 'speakers/2022/Copy of Nupur Agarwal0.jpg',
      content: "How much can we, as a society, be self-reliant? Yasaswini Jonnalagadda's story from being an electrical engineer and an MBA graduate to a committed social worker who roots for compassion to change the world is an exploration of this question. During the pandemic, her efforts to help the needy became a foundational learning experience to envision social welfare through self-sustenance. This is the story of one woman and her pursuit to make lives better by enabling self-reliance and sustainability at the grassroots level. It is a lesson in distilling opportunities out of obstacles.",
    }
  ];
  const speakers6 = [
    {
      name: 'Yasaswini Jonnalagadda',
      topic: 'Global Issues',
      imageSrc: 'speakers/2022/Copy of Yasaswini copy.jpg',
      content: "How much can we, as a society, be self-reliant? Yasaswini Jonnalagadda's story from being an electrical engineer and an MBA graduate to a committed social worker who roots for compassion to change the world is an exploration of this question. During the pandemic, her efforts to help the needy became a foundational learning experience to envision social welfare through self-sustenance. This is the story of one woman and her pursuit to make lives better by enabling self-reliance and sustainability at the grassroots level. It is a lesson in distilling opportunities out of obstacles.",
    }
  ];
  const speakers5 = [{
    name: 'Yasaswini Jonnalagadda',
    topic: 'Global Issues',
    imageSrc: 'speakers/2022/Copy of Srinivas Prabhu.jpg',
    content: "How much can we, as a society, be self-reliant? Yasaswini Jonnalagadda's story from being an electrical engineer and an MBA graduate to a committed social worker who roots for compassion to change the world is an exploration of this question. During the pandemic, her efforts to help the needy became a foundational learning experience to envision social welfare through self-sustenance. This is the story of one woman and her pursuit to make lives better by enabling self-reliance and sustainability at the grassroots level. It is a lesson in distilling opportunities out of obstacles.",
  }];


  const speakers7 = [{
    name: 'Yasaswini Jonnalagadda',
    topic: 'Global Issues',
    imageSrc: 'speakers/2022/Copy of Anju Arora.jpg',
    content: "How much can we, as a society, be self-reliant? Yasaswini Jonnalagadda's story from being an electrical engineer and an MBA graduate to a committed social worker who roots for compassion to change the world is an exploration of this question. During the pandemic, her efforts to help the needy became a foundational learning experience to envision social welfare through self-sustenance. This is the story of one woman and her pursuit to make lives better by enabling self-reliance and sustainability at the grassroots level. It is a lesson in distilling opportunities out of obstacles.",
  }];
  const speakers8 = [{
    name: 'Yasaswini Jonnalagadda',
    topic: 'Global Issues',
    imageSrc: 'speakers/2022/Copy of Chirantana 2.jpg',
    content: "How much can we, as a society, be self-reliant? Yasaswini Jonnalagadda's story from being an electrical engineer and an MBA graduate to a committed social worker who roots for compassion to change the world is an exploration of this question. During the pandemic, her efforts to help the needy became a foundational learning experience to envision social welfare through self-sustenance. This is the story of one woman and her pursuit to make lives better by enabling self-reliance and sustainability at the grassroots level. It is a lesson in distilling opportunities out of obstacles.",
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
            Upcoming Speakers
          </div>
          <div className={style.year}>2023</div>

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
                ))}
                {speakers2.map((speaker) => (
                  <div className="col-xl-6" key={speaker.name} >
                    <div className={styles.speaker_item}>
                      <div className="row">
                        <div className="col-md-6 col-lg-5">
                          <div className={styles.si_pic}>
                            <img src="speakers/2022/Copy of Chirantana 2.jpg" alt="" width={350} height={350} />
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

                {speakers3.map((speaker) => (
                  <div className="col-xl-6" key={speaker.name} >
                    <div className={styles.speaker_item}>
                      <div className="row">
                        <div className="col-md-6 col-lg-5">
                          <div className={styles.si_pic}>
                            <img src="speakers/2022/Copy of Leena Haldar 1.jpg" alt="" width={350} height={350} />
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
                {speakers4.map((speaker) => (
                  <div className="col-xl-6" key={speaker.name} >
                    <div className={styles.speaker_item}>
                      <div className="row">
                        <div className="col-md-6 col-lg-5">
                          <div className={styles.si_pic}>
                            <img src="speakers/2022/Copy of Nupur Agarwal0.jpg" alt="" width={350} height={350} />
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
                {speakers5.map((speaker) => (
                  <div className="col-xl-6" key={speaker.name} >
                    <div className={styles.speaker_item}>
                      <div className="row">
                        <div className="col-md-6 col-lg-5">
                          <div className={styles.si_pic}>
                            <img src="speakers/2022/Copy of Srinivas Prabhu.jpg" alt="" width={350} height={350} />
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
                {speakers6.map((speaker) => (
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
                ))}
                {speakers8.map((speaker) => (
                  <div className="col-xl-6" key={speaker.name} >
                    <div className={styles.speaker_item}>
                      <div className="row">
                        <div className="col-md-6 col-lg-5">
                          <div className={styles.si_pic}>
                            <img src="speakers/2022/Copy of Chirantana 2.jpg" alt="" width={350} height={350} />
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
                    <div className="col-lg-5">
                      <img src={selectedSpeaker.imageSrc} alt="" width={350} height={350} />
                    </div>
                    <div className="col-lg-7">
                      <h4>{selectedSpeaker.name}</h4>
                      <h6>Topic - {selectedSpeaker.topic}</h6>
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