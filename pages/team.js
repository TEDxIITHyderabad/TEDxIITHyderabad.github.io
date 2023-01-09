import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import NavbarComp from '../components/Navbar'
import styles from '../styles/Team.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Team(){
    return (
        <>
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <title>TEDx IITH | Team</title>
            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <NavbarComp/>
        
        <div className={styles.speakers_area}>
            <div className='d-sm-none d-lg-block'>
                <h1 className={styles.horizontal_text}>
                    Team
                </h1>
            </div>
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className='mb-95'>
                        <div className={styles.serction_title_large}> 
                            <h3>
                                Team
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">

                {/* ---- OC below ---- */}

                {/* <div className="col-lg-4 offset-lg-4 col-md-6 col-sm-12"> */}
                <div className="col-12 offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-10 offset-md-1 col-sm-12">
                    <div className={styles.single_speaker}>
                        <div className={styles.speaker_thumb}>
                            <img className={styles.image_OC} src="/team/1.png" alt=""/>
                            <div className={styles.hover_overlay}>
                                <div className={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller</h3>
                            <p>OC</p>
                        </div>
                    </div>
                </div>
                <div><br/></div>  {/*find a better method to do this */}
                

                {/* ---- cores start ---- */}

                <div className="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2 col-10 offset-1">
                    <div className={styles.single_speaker}>
                        <div className={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div className={styles.hover_overlay}>
                                <div className={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller</h3>
                            <p>Creative Director</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2 col-10 offset-1">
                    <div className={styles.single_speaker}>
                        <div className={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div className={styles.hover_overlay}>
                                <div className={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller</h3>
                            <p>Creative Director</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2 col-10 offset-1">
                    <div className={styles.single_speaker}>
                        <div className={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div className={styles.hover_overlay}>
                                <div className={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller</h3>
                            <p>Creative Director</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-2 col-md-6 offset-md-0 col-sm-8 offset-sm-2 col-10 offset-1">
                    <div className={styles.single_speaker}>
                        <div className={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div className={styles.hover_overlay}>
                                <div className={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller</h3>
                            <p>Creative Director</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-0 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-10 offset-1">
                    <div className={styles.single_speaker}>
                        <div className={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div className={styles.hover_overlay}>
                                <div className={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller</h3>
                            <p>Creative Director</p>
                        </div>
                    </div>
                </div>

                {/* ---- cores end ---- */}
                <div><br/></div>
                {/* ---- coords start ---- */}

                <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                    <div className={styles.single_speaker_coords}>
                        <div className={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div className={styles.hover_overlay}>
                                <div className={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller kg</h3>
                            <p>Creative Director</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                    <div className={styles.single_speaker_coords}>
                        <div className={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div className={styles.hover_overlay}>
                                <div className={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller </h3>
                            <p>Creative Director</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                    <div className={styles.single_speaker_coords}>
                        <div className={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div className={styles.hover_overlay}>
                                <div className={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller </h3>
                            <p>Creative Director</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                    <div className={styles.single_speaker_coords}>
                        <div className={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div className={styles.hover_overlay}>
                                <div className={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller abcd</h3>
                            <p>Creative Director</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                    <div className={styles.single_speaker_coords}>
                        <div className={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div className={styles.hover_overlay}>
                                <div className={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller </h3>
                            <p>Creative Director</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                    <div className={styles.single_speaker_coords}>
                        <div className={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div className={styles.hover_overlay}>
                                <div className={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller abcd</h3>
                            <p>Creative Director</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                    <div className={styles.single_speaker_coords}>
                        <div className={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div className={styles.hover_overlay}>
                                <div className={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller abcd</h3>
                            <p>Creative Director</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                    <div className={styles.single_speaker_coords}>
                        <div className={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div className={styles.hover_overlay}>
                                <div className={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller abcd</h3>
                            <p>Creative Director</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3 col-sm-6 col-md-4">
                    <div className={styles.single_speaker_coords}>
                        <div className={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div className={styles.hover_overlay}>
                                <div className={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Jonson Miller abcd</h3>
                            <p>Creative Director</p>
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-3 col-md-6">
                    <div className={styles.single_speaker}>
                        <div className={styles.speaker_thumb}>
                            <img src="/team/2.png" alt=""/>
                            <div className={styles.hover_overlay}>
                                <div className={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Kelvin Cooper</h3>
                            <p>Art Director</p>
                        </div>
                    </div>
                    <div className={styles.single_speaker}>
                        <div className={styles.speaker_thumb}>
                            <img src="/team/1.png" alt=""/>
                            <div className={styles.hover_overlay}>
                                <div className={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Marked Macau</h3>
                            <p>UI/UX Designer</p>
                        </div>
                    </div>
                    <div className={styles.single_speaker}>
                        <div className={styles.speaker_thumb}>
                            <img src="/team/3.png" alt=""/>
                            <div className={styles.hover_overlay}>
                                <div className={styles.social_icon}>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a target="_blank" href="#">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.speaker_name} style={{textAlign:'center'}}>
                            <h3>Albert Jackey</h3>
                            <p>Product Designer</p>
                        </div>
                    </div>
                </div> */}

                {/* ---- cores end ---- */}

            </div>
        </div>
    </div>
{/* <div className={`${styles.container_block} ${styles.container}`}>
  <div className={`${styles.responsive_container_block} ${styles.teamcard_container}`}>
    <div className={`${styles.responsive_cell_block} ${styles.wk_desk_3} ${styles.wk_mobile_12} ${styles.wk_tab_4} ${styles.wk_ipadp_4} ${styles.team_card_container}`}>
      <div className={styles.team_card}>
        <div className={styles.team_img_wrapper}>
          <img className={`${styles.team_img}`} src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg"/>
        </div>
        <div className={`${styles.team_card_content}`}>
          <p className={`${styles.text_blk} ${styles.name}`}>
            Roger Lubin
          </p>
          <p className={`${styles.text_blk} ${styles.position}`}>
            CEO
          </p>
        </div>
      </div>
    </div>
    <div className={`${styles.responsive_cell_block} ${styles.wk_desk_3} ${styles.wk_mobile_12} ${styles.wk_tab_4} ${styles.wk_ipadp_4} ${styles.team_card_container}`}>
      <div className={styles.team_card}>
        <div className={styles.team_img_wrapper}>
          <img className={`${styles.team_img}`} src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg"/>
        </div>
        <div className={`${styles.team_card_content}`}>
          <p className={`${styles.text_blk} ${styles.name}`}>
            Roger Lubin
          </p>
          <p className={`${styles.text_blk} ${styles.position}`}>
            CEO
          </p>
        </div>
      </div>
    </div>
    <div className={`${styles.responsive_cell_block} ${styles.wk_desk_3} ${styles.wk_mobile_12} ${styles.wk_tab_4} ${styles.wk_ipadp_4} ${styles.team_card_container}`}>
      <div className={styles.team_card}>
        <div className={styles.team_img_wrapper}>
          <img className={`${styles.team_img}`} src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg"/>
        </div>
        <div className={`${styles.team_card_content}`}>
          <p className={`${styles.text_blk} ${styles.name}`}>
            Roger Lubin
          </p>
          <p className={`${styles.text_blk} ${styles.position}`}>
            CEO
          </p>
        </div>
      </div>
    </div>
    <div className={`${styles.responsive_cell_block} ${styles.wk_desk_3} ${styles.wk_mobile_12} ${styles.wk_tab_4} ${styles.wk_ipadp_4} ${styles.team_card_container}`}>
      <div className={styles.team_card}>
        <div className={styles.team_img_wrapper}>
          <img className={`${styles.team_img}`} src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg"/>
        </div>
        <div className={`${styles.team_card_content}`}>
          <p className={`${styles.text_blk} ${styles.name}`}>
            Roger Lubin
          </p>
          <p className={`${styles.text_blk} ${styles.position}`}>
            CEO
          </p>
        </div>
      </div>
    </div>
    
    
    
  </div>
</div> */}
        <Footer/>
        </>
    )
}