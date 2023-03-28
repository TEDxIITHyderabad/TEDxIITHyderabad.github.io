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
      name: 'Neha Bhat',
      topic: 'Psychotherapist, Artist, and Writer',
      imageSrc: 'speakers/2023/neha bhatt.png',
      content: "Neha Bhat specializes in feminist-oriented, trauma-informed art therapy and counseling between India and the U.S. She employs trauma-focused therapy for survivors of sexual violence, offers crisis counseling, and uses art as a radical tool of living and coping against oppressive systems. Her work as an interdisciplinary artist informs her professional counseling practice, enabling her to bring into the clinical setting elements of play through visual art, theatre, and movement into the clinical setting. She has worked at global institutions, including the University of Michigan, the Art Institute of Chicago, Rush Medical Centre, and the Tata Institute of Social Sciences.",
    },
  ];
  const speakers2 = [
    {
      name: 'Dr. CVS Kiran',
      topic: 'Lead - R&D and Strategy at Skyroot Aerospace, Hon. Director at AnanthaP',
      imageSrc: '/speakers/2023/kiran.png',
      content: "Being a man with a vision that sees beyond our universe, Dr. CVS Kiran is a proud contributor to Skyroot Aerospace’s missions as a lead and R&D strategist and as a R&D director at AnanthaP. He has also worked for VSSC while being associated with the HIU and KIT as a guest scientist. Dr. Kiran was elected as a fellow for Andhra Pradesh Akademi of Sciences and also served as member of scientific convent - KIT. He has published about 100 scientific papers and holds one patent. With an unassuming appearance coupled with extraordinary thoughts, his work for the prestigious missions in the field of Science and Technology in India truly motivates and encourages the young generation to aspire for mammoth endeavours.",
    },
  ];
  const speakers3 = [
    {
      name: 'Dr. Yadvendradev Jhala ',
      topic: 'Indian Scientist and Conservationist, Recently retired and ended his tenure as the Dean at the Wildlife Institute of India, Dehradun. ',
      imageSrc: 'speakers/2023/jhala.png',
      content: "Professor Yadvendradev Jhala served as faculty at the Wildlife Institute of India (WII), an Autonomous Institute of the Ministry of Environment, Forest and Climate Change, Government of India since 1993 and retired as its Dean in February 2023. He is a member of the IUCN Specialist groups for canids, cats, bustards, and hyenas, and is a fellow of the Indian National Science Academy. He joined WII in 1993 and has since pioneered quantitative, technology-based research on tigers, Asiatic lions, wolves, striped hyenas, snow leopards, dhole, and other wildlife. He initiated the Species Recovery Program for the Great Indian Bustard and their conservation breeding program as insurance against extinction. He worked in close collaboration with the National Tiger Conservation Authority, MoEFCC, and has designed and implemented the estimation of tigers, co-predators, prey, and their habitat in India since 2006. This effort for 2018 was awarded the Guinness World Record as the largest wildlife survey. As part of his role as the lead scientist on the ambitious Cheetah Reintroduction Project of India, Jhala conceptualized the project, negotiated with the governments of South Africa and Namibia, put together a team of international cheetah experts, selected the first batches of cheetahs and brought them to India.",
    }
  ];
   const speakers4 = [
     {
       name: 'Murtuza Kutianawalla',
       topic: 'Founder and CEO, Bizzy Baby media and entertainment',
       imageSrc: 'speakers/2023/MurtuzaPicture.jpg',
       content: "Murtuza Kutianawalla, born in Mumbai, at 33 years of age has a combined experience of 12 years in the media and entertainment industry. After finishing his M.COM with his key interest in storytelling he went ahead and kickstarted a theatre company where he Directed and Produced 5 commercially successful plays with over 200 shows across India and overseas. Simultaneously, he worked as an Anchor/VJ for Walt Disney India in 2011. He represented Disney India in the friends for change, in Orlando along with Hosting Airtels Champions League, held in South Africa (A Disney and ESPN initiative). He was then casted as a protagonist for a Walt Disney India series called “Best of Luck Nikki '' as Rohan Singh that ran across 4 seasons. Best of luck Nikki has gathered over a billion views on YouTube and Hotstar and is still counting. Murtuza has also worked on ads like PEPSI, COKE, MCDONALDS and NIKON with Priyanka Chopra! Since 2016, he worked with a large global MCN/kids network called Hooplakidz where he wore the creative hat to help create and grow several IP’s in the digital ecosystem.Bizzy Baby Media, was founded by him in 2017, where he accelerated his vision by creating several IP’s in the animation sector along with several studios and brands till date. Today, After working on successful campaigns for ICICI Bank, JSW One Homes and UNESCO, his aim is to build brands through effective content marketing. Every story is good! All you need is a good storyteller!",
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
    name: 'Raju Kendre',
    topic: 'Founder and CEO, Eklavya India Foundation',
    imageSrc: 'speakers/2023/raju kendre.png',
    content: 'Raju Kendre, a Social Entrepreneur, Hailing from a nomadic tribal family in Vidarbha, where his parents did not even finish primary education. Raju Kendres journey to becoming a social entrepreneur is all the more remarkable. Rajus own lived experience inspires him to found Eklavya India Foundation in 2017. The Foundations mission is to promote higher education and leadership in first-generation learners, Over the last six years, Eklavya India Foundation has made a significant impact by conducting career awareness workshops for 25,000 students from rural and tribal regions and enabling 700 first-generation learners to gain admission into top-notch universities and fellowship programmes. The Foundation has also provided a cumulative 0.5 Million hours of mentorship and career guidance in the last six years."',
  }];


  // const speakers7 = [{
  //   name: 'Yasaswini Jonnalagadda',
  //   topic: 'Global Issues',
  //   imageSrc: 'speakers/2022/Copy of Anju Arora.jpg',
  //   content: "How much can we, as a society, be self-reliant? Yasaswini Jonnalagadda's story from being an electrical engineer and an MBA graduate to a committed social worker who roots for compassion to change the world is an exploration of this question. During the pandemic, her efforts to help the needy became a foundational learning experience to envision social welfare through self-sustenance. This is the story of one woman and her pursuit to make lives better by enabling self-reliance and sustainability at the grassroots level. It is a lesson in distilling opportunities out of obstacles.",
  // }];
  const speakers8 = [{
    name: 'Aarathi Selvan',
    topic: 'Clinical psychologist',
    imageSrc: 'speakers/2023/Aarathi Selvan.jpg',
    content: "Aarathi Selvan is the founder of Pause for Perspective. They are a Counseling psychologist with a dual Masters from Columbia University, a clinical psychologist with an MPhil from Osmania University and a Phd Scholar at the University of Madras. They lead Pause for Perspective, a mental health organisation in Hyderabad that works towards mental health and well being from the intersections of embodied social justice, anti caste, anti patriarchy, queer affirmative, neurodivergence affirmative and disability justice. They work with a team of women and trans and non binary practitioners with a vision of offering access to mental health awareness, and advocacy for well being for young people, families and collectives in the margins. They work with government and budget private schools to offer mental health awareness and advocacy, they offer mental health and gender and sexuality awareness education for children and their stakeholders in institutions and welfare homes in the city of Hyderabad. In the last four years their team has reached more than 10,000 children across different schools in Hyderabad as well and as many young people across colleges in Hyderabad to spread mental health awareness.  They also have a training team that works together for three months a year to offer free therapy for those in the margins. In the last two years their team has been able to reach 400 people offering 4500 hours of Counseling through this means. It is Aarathi’s continued vision to work towards sustainable mental health support and access for all, especially those in the margins through the lens of embodied social justice. Aarathi works as a therapist, supervisor, teacher and mentor for mental health practitioners across the country. ",
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
                            <img src="speakers/2023/neha bhatt.png" alt="" width={350} height={350} />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-7">
                          <div className={styles.si_text}>
                            <div className={styles.si_title}>
                              <h4>Neha Bhat</h4>
                              <p>Psychotherapist, Artist, and Writer </p>
                            </div>
                            <p>
                            Neha Bhat specializes in feminist-oriented, trauma-informed art therapy and counseling between India and the U.S. She employs trauma-focused therapy for survivors of <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                            <img src="speakers/2023/kiran.png" alt="" width={350} height={350} />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-7">
                          <div className={styles.si_text}>
                            <div className={styles.si_title}>
                              <h4>Dr CVS Kiran</h4>
                              <p>Lead, R&D Strategist at Skyroot Aerospace, R&D Director at AnanthaP</p>
                            </div>
                            <p>
                            Being a man with a vision that sees beyond our universe, Dr. CVS Kiran is a proud contributor to Skyroot Aerospace’s missions as a lead and R&D strategist and as a R&D director a <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                            <img src="speakers/2023/jhala.png" alt="" width={350} height={350} />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-7">
                          <div className={styles.si_text}>
                            <div className={styles.si_title}>
                              <h4>Dr. Yadvendradev Jhala</h4>
                              <p>Indian Scientist and Conservationist, Recently retired and ended his tenure as the Dean at the Wildlife Institute of India, Dehradun.</p>
                            </div>
                            <p>
                            Being a man with a vision that sees beyond our universe, Dr. CVS Kiran is a proud contributor to Skyroot Aerospace’s missions as <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                            <img src="speakers/2023/MurtuzaPicture.jpg" alt="" width={350} height={350} />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-7">
                          <div className={styles.si_text}>
                            <div className={styles.si_title}>
                              <h4>Murtuza Kutianawalla</h4>
                              <p>Founder and CEO, Bizzy Baby media and entertainment</p>
                            </div>
                            <p>
                            Murtuza Kutianawalla, born in Mumbai, at 33 years of age has a combined experience of 12 years in the media and entertainment industry. After finishing his M.COM with his key interest in storytelling <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                            <img src="speakers/2023/raju kendre.png" alt="" width={350} height={350} />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-7">
                          <div className={styles.si_text}>
                            <div className={styles.si_title}>
                              <h4>Raju Kendre</h4>
                              <p>Founder and CEO, Eklavya India Foundation</p>
                            </div>
                            <p>
                            Raju Kendre, a Social Entrepreneur, Hailing from a nomadic tribal family in Vidarbha, where hisparents did not even finish primary education. Raju Kendre's journey to becoming a socialentrepren <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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
                            <img src="speakers/2023/Aarathi Selvan.jpg" alt="" width={350} height={350} />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-7">
                          <div className={styles.si_text}>
                            <div className={styles.si_title}>
                              <h4>Aarathi Selvan</h4>
                              <p>Clinical psychologist</p>
                            </div>
                            <p>
                            Aarathi Selvan is the founder of Pause for Perspective. They are a Counseling psychologist with a dual Masters from Columbia University, a clinical psychologist  <span className={styles.read_more} onClick={() => handleReadMoreClick(speaker)}>.....Read more.</span>
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