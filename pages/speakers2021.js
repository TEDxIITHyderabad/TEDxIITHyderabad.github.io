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
      name: 'Anahita Sarabhai',
      topic: 'Performer, Activist, Poet, Founder Director QueerAbad',
      imageSrc: 'speakers/2021/anahita sarabhai.jpg',
      content: "Anahita (she/her, they/them) is the Founder-Director of QueerAbad, Ahmedabad's only Queer-Ally support and community platform. She is an educator and facilitator, teaching IB Theatre Arts and English Literature to 11th & 12th grade students, as well as running theatre based workshops on creativity, team & confidence building, mental health & peer support, & positive communication, for corporate and NGO clients. Regardless of the work or project, Anahita focuses on having a continued dialogue and engagement with gender, sexuality and the self.",
      youtubeLink:'https://youtu.be/4vM9n5C4Gv8',
    },
  ];
  const speakers2 = [
    {
      name: 'Aruna Bahuguna',
      topic: 'Indian Police Service - Director General of Police (retired)',
      imageSrc: 'speakers/2021/Aruna Bahuguna.jpg',
      content: "Aruna Bahuguna is the first woman IPS officer in erstwhile Andhra Pradesh. She has served in challenging areas across the country and had risen to the seniormost rank of Director General of Police. She has been Indian Police Medal for Distinguished Service, President’s Police Medal for Meritorious Service and Union Home Minister’s Disc for Excellence in an Institution.",
      youtubeLink:'https://youtu.be/I3xQWhIE-kE',
    },
  ];
  const speakers3 = [
    {
      name: 'Kamal Nayak',
      topic: 'Founder & Director, Good Universe NGO',
      imageSrc: 'speakers/2021/Kamal Nayak.jpg',
      content: "Kamal Nayak, the founder of the NGO Good Universe, is a UN SDSN Fellow, who advocates for sustainability in the field of women’s health, climate change, and gender equality. His NGO’s vision is to create a free and equal world where women, children and transgender can lead a dignified and secure life. Good Universe has positively impacted more than 40,000 women directly, and 10,00,000 women indirectly in the last six years. Being dearly addressed as the Padman of Hyderabad, he has also earned the title of Hyderabad Heroes Award by TOI.",
      youtubeLink:'https://youtu.be/qoLTWCbG7p0',
    },
  ];
  const speakers4 = [
    {
      name: 'Meghnad S',
      topic: 'Associate Editor, Newslaundry.com',
      imageSrc: 'speakers/2021/Meghnad S.jpg',
      content: "Meghnad is a public policy professional and a die-hard Parliament nerd who’s currently the Associate Editor at Newslaundry. When he is not watching Lok Sabha and Rajya Sabha TV obsessively, he spends his time poring over legislation, trying to simplify them on Twitter and writing columns about them using GIFs. He hosted a series to simplify the working of the Indian government called ‘Consti-tuition’ with Newslaundry. He is a former LAMP fellow and has worked with multiple MPs in the past.",
      youtubeLink:'https://youtu.be/C55yyTl1vwM',
    },
  ];
//   const speakers6 = [
//     {
//       name: '',
//       topic: '',
//       imageSrc: 'speakers/2021/.jpg',
//       content: "",
//     },
//   ];
const speakers5 = [
    {
      name: 'Pooja Dagli',
      topic: 'Co-founded the Robin Hood Academy',
      imageSrc: 'speakers/2021/Pooja Dagli.jpg',
      content: "Pooja Dagli is the founder of Robin Hood Academy, an initiative of the Robin Hood Army. Professionally, she is pursuing a career in corporate law. Her foodie genes, love for kids, and a strong desire to give back to society found her soul mate in Robin Hood Army. The Robin Hood Academy was founded in 2016 to empower underprivileged kids and bridge the education gap. The academy has mentored over 7300 street children in more than 102 cities, and over 1800 children, fondly called 'Academy Graduates', are enrolled in government-recognized schools.",
      youtubeLink:'https://youtu.be/Lqt7w0BKUUI',
    },
  ];


   const speakers7 = [
     {
       name: 'Vimal Chandran',
       topic: 'Visual Artist',
       imageSrc: 'speakers/2021/Vimal Chandran.jpg',
       content: "Adept in various art and photography genres, with an impeccable flair for creativity, Vimal Chandran could be aptly named a Visual Artist. He's a self-taught artist whose work is a skilful concoction of urban art, illustrations, installations, graphic design, photography and film. Hailing from Kerala, Vimal currently lives in Bangalore, India. Vimal undertakes commercial assignments/ brand collaborations with as much passion as his self initiated works. He is also the founder of 'Unposted letters' that showcases his works on unique lifestyle products. to",
       youtubeLink:'https://youtu.be/maK87FO1Jy4',
     },
   ];
const speakers8 = [
    {
      name: 'Swami Sarvapriyananda',
      topic: 'Monk in Charge, Vedanta Society of New York',
      imageSrc: 'speakers/2021/Swami Sarvapriyananda.jpg',
      content: "Swami Sarvapriyananda is a Hindu monk of the Ramakrishna Order for more than 25 years. Currently, he is the head of the Vedanta Society of New York, a position he has been serving since January 2017. He was also in residence at Harvard Divinity School at Harvard University last year. He frequently speaks at events centred on the teachings of Advaita Vedanta. His spiritual lectures and teachings on the various texts of Advaita Vedanta are widely popular and followed by people worldwide. His series of lectures titled Who am I? are some of his most-watched talks.",
      youtubeLink:'https://youtu.be/B1oYvwMVbiw',
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
          <div className={style.year}>2021</div>

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
                            <div className={styles.play_button} >
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
                            Anahita (she/her, they/them) is the Founder-Director of QueerAbad, Ahmedabad's only Queer-Ally support and community platform. She is an educator and<span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                            <div className={styles.play_button} >
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
                            Aruna Bahuguna is the first woman IPS officer in erstwhile Andhra Pradesh. She has served in challenging areas across the country and had risen <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                            <div className={styles.play_button} >
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
                            Kamal Nayak, the founder of the NGO Good Universe, is a UN SDSN Fellow, who advocates for sustainability in the field of women’s health, <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                            <div className={styles.play_button} >
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
                            Meghnad is a public policy professional and a die-hard Parliament nerd who’s currently the Associate Editor at Newslaundry. When he is not watching <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                          <div className={styles.si_pic}  onClick={() => window.open(speaker.youtubeLink, '_blank')}>
                            <div className={styles.play_button} >
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
                            Pooja Dagli is the founder of Robin Hood Academy, an initiative of the Robin Hood Army. Professionally, she is pursuing a career in corporate law. Her foodie genes,<span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                ))} */}
                {speakers7.map((speaker) => (
                  <div className="col-xl-6" key={speaker.name} >
                    <div className={styles.speaker_item}>
                      <div className="row">
                        <div className="col-md-6 col-lg-5">
                          <div className={styles.si_pic}  onClick={() => window.open(speaker.youtubeLink, '_blank')}>
                            <div className={styles.play_button} >
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
                            Adept in various art and photography genres, with an impeccable flair for creativity, Vimal Chandran could be aptly named a Visual Artist. He's a self-taught <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                          <div className={styles.si_pic}  onClick={() => window.open(speaker.youtubeLink, '_blank')}>
                            <div className={styles.play_button} onClick={() => window.open(speaker.youtubeLink, '_blank')}>
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
                            Swami Sarvapriyananda is a Hindu monk of the Ramakrishna Order for more than 25 years. Currently, he is the head of the Vedanta Society of New York, a position<span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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