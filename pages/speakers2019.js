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
      name: 'Amala Akkineni',
      topic: '',
      imageSrc: 'speakers/2019/Amala Akkineni.jpg',
      content: "Amala Akkineni is an actress, a dancer and an animal rights activist. She is the founder of the Blue Cross Society of Hyderabad and has been aiding in protecting and nurturing hundreds of stray animals for the past 25 years. She has thus helped in transforming the public perception towards stray animals. Amala’s work has been widely recognized and appreciated by the government as well as private organisations alike.",
      youtubeLink:'https://youtu.be/Q5-dPIXjcUc',
    },
  ];
  const speakers2 = [
    {
      name: 'Asif Qureshi',
      topic: '',
      imageSrc: 'speakers/2019/Asif Qureshi.jpg',
      content: "Asif Qureshi is an associate professor in the Department of Civil Engineering at IIT Hyderabad, and the leader of the Emerging Contaminants Group (ECG) which focuses on industrial micro-pollutants that cause neurological, cardiovascular and endocrine disruption in humans. He has also led the expedition to Antarctica for four months in 2017, where they have discovered Antarctic fungi that can be used to fight Acute Lymphoblastic Leukaemia.",
      youtubeLink:'https://youtu.be/7HQ1OLYaTyE',
    },
  ];
  const speakers3 = [
    {
      name: 'Hanif Kureshi',
      topic: '',
      imageSrc: 'speakers/2019/Hanif Kureshi.jpg',
      content: "Hanif Kureshi is the co-founder and artistic director of St+art India. St+art is a non-profit founded for the sole purpose of bringing artists from around the world to collaborate with Indian artists. Their art not just brightens the dull and erratically constructed neighbourhoods like in New Delhi, Mumbai and Hyderabad. It is also like a wave of fresh air that rekindles creativity and imagination in people who are so accustomed to the constant struggles of life in chaotic cities that they lose consciousness of their own power to imagine. In the words of Hanif Kureshi himself, “Street art has an entirely different perspective on art. The art world is unapproachable for the common man. In a gallery the intention is to go and see art. However, in public spaces, such as Shahpur Jat, the art comes to you. It takes you by surprise and the impact is greater when you are not prepared. The street is a democratic medium. The space always comes first and this differentiates street art from other art.",
      youtubeLink:'https://youtu.be/P9mvZlv5-x8',
    },
  ];
  const speakers4 = [
    {
      name: 'Ravi Narayan',
      topic: '',
      imageSrc: 'speakers/2019/Ravi Narayan.jpg',
      content: "Ravi Narayan is a pioneer in the Venture Catalyst/Startup Accelerator space. He has worked for the past decade, in building institutions for supporting entrepreneurship globally. He has advised corporations and governments in implementing startup and innovation programs. He has also pioneered a Digital Transformation Program that leverages innovative and disruptive technologies from startups globally. Ravi is a founding chair of PAN-IIT in Washington DC, TiE Entrepreneurial Summit (TES) in Bangalore and the NASSCOM Product Conclave in Bangalore.",
      youtubeLink:'https://youtu.be/Om2Q384dMuk',
    },
  ];
//   const speakers6 = [
//     {
//       name: '',
//       topic: '',
//       imageSrc: 'speakers/2019/.jpg',
//       content: "",
//     },
//   ];
const speakers5 = [
    {
      name: 'Ritwik Mishra',
      topic: '',
      imageSrc: 'speakers/2019/Ritwik Mishra.jpg',
      content: "Ritwik Mishra is a Talent Management professional with specialization in Organizational Development and Learning & Development. He focuses on creating holistic and systemic solutions to enhance the efficiency and effectiveness of organizations and people. He believes that such solutions are scalable and sustainable and hence best suited to organizations operating in a dynamic and uncertain environment.",
      youtubeLink:'https://youtu.be/3cKwpt4VDYk',
    },
  ];


//   const speakers7 = [
//     {
//       name: '',
//       topic: '',
//       imageSrc: 'speakers/2019/.jpg',
//       content: "",
//     },
//   ];
const speakers8 = [
    {
      name: 'Sophia David',
      topic: '',
      imageSrc: 'speakers/2019/Sophia David.png',
      content: "Sophia David is an Inclusion & Diversity advocate and prefers the pronouns “she, her and hers” while she self identifies. She is a Facilitator, a Consultant and a Leader Coach by profession, with about 16 years of work experience. Sophia works with various Diversity & Inclusion panels and councils in bringing awareness and sensitization around issues that people face in the workplace. She is instrumental in bringing policy changes and benefits awareness to people from different walks of life. In the past, she has worked with the learning organizations of several industries such as – Aerospace, Retail, Customer Care, Engineering, Pharmaceuticals, Banking, Publishing and Management consulting. She is certified from the University of Cambridge, UK, has a background in Neuro-linguistics and Psychology while holding a degree in Mathematics. She is British Council certified and certified by the International Coach Federation (ICF). She is a Human Rights Activist with a focus on Women & LGBTQ issues and believes everyone should lend their voice to issues that affect people. She does a lot of pro bono work, presenting and talking to leaders and professionals from different walks of life from universities to multinational companies.      ",
      youtubeLink:'https://youtu.be/dPGRpzamh9c',
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
          <div className={style.year}>2019</div>

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
                            Amala Akkineni is an actress, a dancer and an animal rights activist. She is the founder of the Blue Cross Society of Hyderabad and has been aiding <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                            Asif Qureshi is an associate professor in the Department of Civil Engineering at IIT Hyderabad, and the leader of the Emerging Contaminants Group<span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                            Hanif Kureshi is the co-founder and artistic director of St+art India. St+art is a non-profit founded for the sole purpose of bringing artists from around the world <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                            <p>
                            Ravi Narayan is a pioneer in the Venture Catalyst/Startup Accelerator space. He has worked for the past decade, in building institutions for supporting <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                            Ritwik Mishra is a Talent Management professional with specialization in Organizational Development and Learning & Development. He focuses on creating <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                            Sophia David is an Inclusion & Diversity advocate and prefers the pronouns “she, her and hers” while she self identifies. She is a Facilitator, a Consultant and a Leader<span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                            <img src={selectedSpeaker.imageSrc} alt="" width={350} height={350} />
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