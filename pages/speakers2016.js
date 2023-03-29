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
import { faCirclePlay,faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Upcomingspeakers() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const handleReadMoreClick = (speaker) => {
    setSelectedSpeaker(speaker);
    setModalIsOpen(true);
  }

  const speakers1 = [
    {
      name: 'Jayesh Ranjan',
      topic: '',
      imageSrc: 'speakers/2016/Jayesh Ranjan.jpg',
      content: "Mr. Jayesh Ranjan is a member of the Indian Administrative Service (IAS) of the 1992 batch and working in the state of Telangana. He holds a Masters Degree in Psychology from Delhi University, a degree in Business Management from the Indian Institute of Management, Calcutta, and a Masters in Public Management from Lee Kuan Yew School of Public Policy, National University of Singapore. Jayesh Ranjan is the Secretary, Information Technology, Electronics & Communications Department , Government of Telangana, Commissioner of Industries and Managing Director of the Telangana State Industrial Infrastructure Corporation (TSIIC). His responsibilities include identifying industrial development opportunities in the state, attracting investments, and providing the required infrastructure support to the industrial units.",
      youtubeLink:'https://youtu.be/l103C_ISp3s',
    },
  ];
  const speakers2 = [
    {
      name: 'Rajesh Narasimhan',
      topic: '',
      imageSrc: 'speakers/2016/Rajesh Narasimhan.jpg',
      content: "Rajesh Narasimhan is a part Hindi feature film writer, part marketing guy and full time motorcyclist. Over the last 14 years he has worked across advertising agencies like Ogilvy & Mather, a youth television channel like MTV and one of India's biggest movie studios, Yash Raj Films. Rajesh's love for riding has has always been reciprocated and helped him find stories. He believes that the road is the ultimate classroom in life.",
      youtubeLink:'https://youtu.be/xZqziah4MYE',
    },
  ];
  const speakers3 = [
    {
      name: 'Vennela Krishna',
      topic: '',
      imageSrc: 'speakers/2016/Vennela Krishna.jpg',
      content: "Vennela Krishna is a student of law at NALSAR University, Hyderabad. She found her love for teaching at a young age, and took up a job as a trainer for law aspirants when she was in her first year of law school. A year later, she founded a start-up that brought together bright students who made it to the best colleges in the country to mentor and guide junior aspirants of law. Her vision behind the start-up was to eliminate teacher-student hierarchies and to guide the younger generation of students as friends who have been there, and done that. She leads the team that comprises of numerous students from various parts of the country, and the team is motivated to disrupt traditional structures of education.",
      youtubeLink:'https://youtu.be/9_bQodgnVAs',
    },
  ];
  const speakers4 = [
    {
      name: 'Anuj Gurwara',
      topic: '',
      imageSrc: 'speakers/2016/Anuj Gurwara.jpg',
      content: "",
      youtubeLink:'https://youtu.be/KiateofiBY0',
    },
  ];
   const speakers6 = [
     {
       name: 'Ramesh Loganathan',
       topic: '',
     imageSrc: 'speakers/2016/Ramesh Loganathan.jpg',
       content: "",
       youtubeLink:'https://youtu.be/0h-iUAXwqEs',
     },
   ];
 const speakers5 = [
    {
       name: 'Dr. Vishal Rao',
       topic: '',
       imageSrc: 'speakers/2016/Dr. Vishal Rao.jpg',
       content: "",
       youtubeLink:'https://youtu.be/JYDPO9VykHY',
     },
   ];


//   const speakers7 = [
//     {
//       name: '',
//       topic: '',
//       imageSrc: 'speakers/2016/.jpg',
//       content: "",
//     },
//   ];
// const speakers8 = [
//     {
//       name: '',
//       topic: '',
//       imageSrc: 'speakers/2016/.jpg',
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
          <div className={style.year}>2016</div>

          {/* Speaker Section Begin */}
          <section className={styles.speaker_section_spad}>
            <div className="container my-custom-container">
              <div className="row">
                {speakers1.map((speaker) => (
                  <div className="col-xl-6" key={speaker.name}>
                    <div className={styles.speaker_item}>
                      <div className="row">
                        <div className="col-md-6 col-lg-5">
                          <div className={styles.si_pic}  onClick={() => window.open(speaker.youtubeLink, '_blank')}>
                            <div className={styles.play_button}  onClick={() => window.open(speaker.youtubeLink, '_blank')}>
                            <FontAwesomeIcon className={styles.play_icon}icon={faCirclePlay} />
                            </div>
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
                            Mr. Jayesh Ranjan is a member of the Indian Administrative Service (IAS) of the 1992 batch and working in the state of Telangana. He holds a Masters Degree in  <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                          <div className={styles.si_pic}  onClick={() => window.open(speaker.youtubeLink, '_blank')}>
                            <div className={styles.play_button}  onClick={() => window.open(speaker.youtubeLink, '_blank')}>
                            <FontAwesomeIcon className={styles.play_icon}icon={faCirclePlay} />
                            </div>
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
                            Rajesh Narasimhan is a part Hindi feature film writer, part marketing guy and full time motorcyclist. Over the last 14 years he has worked across advertising agencies <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                          <div className={styles.si_pic}  onClick={() => window.open(speaker.youtubeLink, '_blank')}>
                            <div className={styles.play_button}  onClick={() => window.open(speaker.youtubeLink, '_blank')}>
                            <FontAwesomeIcon className={styles.play_icon}icon={faCirclePlay} />
                            </div>
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
                            Vennela Krishna is a student of law at NALSAR University, Hyderabad. She found her love for teaching at a young age, and took up a job as a trainer for law aspirants when <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                          <div className={styles.si_pic}  onClick={() => window.open(speaker.youtubeLink, '_blank')}>
                            <div className={styles.play_button}  onClick={() => window.open(speaker.youtubeLink, '_blank')}>
                            <FontAwesomeIcon className={styles.play_icon}icon={faCirclePlay} />
                            </div>
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
                {speakers5.map((speaker) => (
                  <div className="col-xl-6" key={speaker.name} >
                    <div className={styles.speaker_item}>
                      <div className="row">
                        <div className="col-md-6 col-lg-5">
                          <div className={styles.si_pic}  onClick={() => window.open(speaker.youtubeLink, '_blank')}>
                            <div className={styles.play_button}  onClick={() => window.open(speaker.youtubeLink, '_blank')}>
                            <FontAwesomeIcon className={styles.play_icon}icon={faCirclePlay} />
                            </div>
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
                {speakers6.map((speaker) => (
                  <div className="col-xl-6" key={speaker.name} >
                    <div className={styles.speaker_item}>
                      <div className="row">
                        <div className="col-md-6 col-lg-5">
                          <div className={styles.si_pic}  onClick={() => window.open(speaker.youtubeLink, '_blank')}>
                            <div className={styles.play_button}  onClick={() => window.open(speaker.youtubeLink, '_blank')}>
                            <FontAwesomeIcon className={styles.play_icon}icon={faCirclePlay} />
                            </div>
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
                {/* {speakers7.map((speaker) => (
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
                          <div className={styles.si_pic}  onClick={() => window.open(speaker.youtubeLink, '_blank')}>
                            <div className={styles.play_button}  onClick={() => window.open(speaker.youtubeLink, '_blank')}>
                            <FontAwesomeIcon className={styles.play_icon}icon={faCirclePlay} />
                            </div>
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
                    <div className={styles.si_pic}  onClick={() => window.open(selectedSpeaker.youtubeLink, '_blank')}>
                            <div className={styles.play_button}  onClick={() => window.open(selectedSpeaker.youtubeLink, '_blank')}>
                            <FontAwesomeIcon className={styles.play_icon}icon={faCirclePlay} />
                            </div>
                            <img className={styles.modal_image} src={selectedSpeaker.imageSrc} alt="" width={350} height={350} />
                          </div>
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