import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import styles from '../styles/Sponsors.module.css'
export default function Sponsors() {
    return (
        <>
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <title>TEDx IITH | Sponsors</title>
            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link
            href="https://assets-global.website-files.com/62d1f2146087f67fb3fc980c/css/webflowconf-2022.webflow.81e13c77d.min.css"
            rel="stylesheet" type="text/css"></link>
        </Head>
        <section data-w-id="cf7a5bcc-72e5-3805-1397-f700e1ccb624" className="section cc-header">
            <div className="u-bg-grid-top_right cc-overlay"></div><img
                src="https://assets-global.website-files.com/62d1f2146087f67fb3fc980c/6319f682d128c594a9015a97_Build-06.svg"
                loading="eager" alt="" className="blur cc-top-right cc-short-header"/>
            <div className="glasses-wrapper">
                <div className="glass cc-1">
                </div>
                <div className="glass cc-4">
                </div>
                <div className="glass cc-3">
                </div>
            </div>
            <div className="section u-pt-0">
                <div className="container u-z-index-1">
                    <div className="u-w-70 u-mlr-auto u-text-center">
                        <h1 className="h0 u-mb-0" id={`${styles.spons}`}>Sponsors</h1>
                        <div className="paragraph-xl u-mt-1">Learn more about the folks who are helping make this year's event
                            the best yet.</div>
                    </div>
                </div>
            </div>
        </section>
        <section id={`${styles.title_cotitle}`} className="section u-bg-black u-text-white u-overflow-hidden u-position-relative u-p-0">
            <div className="u-bg-grid-bottom_left cc-overlay"></div>
            <img src="https://assets-global.website-files.com/62d1f2146087f67fb3fc980c/6319f683a6c28208b2764ee3_Collaborate-04.svg"
                loading="eager" alt="" className="blur cc-bottom-center"/>
            <div className="container u-z-index-1">
                <h2 id={`${styles.t1}`}>TITLE SPONSOR</h2>
                <div id={`${styles.t2}`}><img src="https://www.reuters.com/resizer/JCEDftTsl0Gdi4Kv1jD2-zWTGUU=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2JAEG65I7FJRXALKYEP4QCCFJU.jpg" alt="amazon" id={`${styles.img1}`}/></div>
                <div id={`${styles.t2}`}><img src="https://bikemalik.com/wp-content/uploads/2018/01/Hero-Xtreme-Sports-1.jpg" alt="hero honda" id={`${styles.img1}`}/></div>
                <div id={`${styles.t2}`}><img src="https://www.reuters.com/resizer/JCEDftTsl0Gdi4Kv1jD2-zWTGUU=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2JAEG65I7FJRXALKYEP4QCCFJU.jpg" alt="amazon" id={`${styles.img1}`}/></div>
                <h2 id={`${styles.t1}`}>CO-TITLE SPONSOR</h2>'
                <div id={`${styles.t2}`}><img src="https://www.reuters.com/resizer/JCEDftTsl0Gdi4Kv1jD2-zWTGUU=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2JAEG65I7FJRXALKYEP4QCCFJU.jpg" alt="amazon" id={`${styles.img1}`}/></div>
                <div id={`${styles.t2}`}><img src="https://bikemalik.com/wp-content/uploads/2018/01/Hero-Xtreme-Sports-1.jpg" alt="hero honda" id={`${styles.img1}`}/></div>
            </div>
            <div className="section u-pb-0">
                <div className="u-d-flex cc-justify-between">
                    <div className="glitch-panel cc-20 u-bg-white"></div>
                    <div className="glitch-panel cc-20 u-bg-white"></div>
                </div>
                <div className="u-d-flex cc-justify-between">
                    <div className="glitch-panel cc-30 u-bg-white"></div>
                    <div className="glitch-panel cc-30 u-bg-white"></div>
                </div>
            </div>
        </section>
        <section id="gold">
            <h2 className="u-pt-1 u-text-center" id={`${styles.golden}`}>Gold Sponsor</h2>
            <div className={`${styles.row}`}>
                <div className={`${styles.column}`}>
                    <div className={`${styles.flip_card}`}>
                        <div className={`${styles.flip_card_inner}`}>
                            <div className={`${styles.flip_card_front}`}>
                                <img src="https://www.reuters.com/resizer/JCEDftTsl0Gdi4Kv1jD2-zWTGUU=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2JAEG65I7FJRXALKYEP4QCCFJU.jpg" alt="amazon" style={{width:"300px",height:"300px"}}/>
                            </div>
                            <div className={`${styles.flip_card_back}`}>
                                <h6>Amazon</h6>
                                <p>Gold Sponser</p>
                                <p>Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free
                                    Shipping & Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.column}`}>
                    <div className={`${styles.flip_card}`}>
                        <div className={`${styles.flip_card_inner}`}>
                            <div className={`${styles.flip_card_front}`}>
                                <img src="https://bikemalik.com/wp-content/uploads/2018/01/Hero-Xtreme-Sports-1.jpg" alt="amazon" style={{width:"300px",height:"300px"}}/>
                            </div>
                            <div className={`${styles.flip_card_back}`}>
                                <h6>Amazon</h6>
                                <p>Gold Sponser</p>
                                <p>Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free
                                    Shipping & Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.column}`}>
                    <div className={`${styles.flip_card}`}>
                        <div className={`${styles.flip_card_inner}`}>
                            <div className={`${styles.flip_card_front}`}>
                                <img src="https://www.reuters.com/resizer/JCEDftTsl0Gdi4Kv1jD2-zWTGUU=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2JAEG65I7FJRXALKYEP4QCCFJU.jpg" alt="amazon" style={{width:"300px",height:"300px"}}/>
                            </div>
                            <div className={`${styles.flip_card_back}`}>
                                <h6>Amazon</h6>
                                <p>Gold Sponser</p>
                                <p>Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free
                                    Shipping & Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.column}`}>
                    <div className={`${styles.flip_card}`}>
                        <div className={`${styles.flip_card_inner}`}>
                            <div className={`${styles.flip_card_front}`}>
                                <img src="https://bikemalik.com/wp-content/uploads/2018/01/Hero-Xtreme-Sports-1.jpg" alt="amazon" style={{width:"300px",height:"300px"}}/>
                            </div>
                            <div className={`${styles.flip_card_back}`}>
                                <h6>Amazon</h6>
                                <p>Gold Sponser</p>
                                <p>Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free
                                    Shipping & Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.column}`}>
                    <div className={`${styles.flip_card}`}>
                        <div className={`${styles.flip_card_inner}`}>
                            <div className={`${styles.flip_card_front}`}>
                                <img src="https://www.reuters.com/resizer/JCEDftTsl0Gdi4Kv1jD2-zWTGUU=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2JAEG65I7FJRXALKYEP4QCCFJU.jpg" alt="amazon" style={{width:"300px",height:"300px"}}/>
                            </div>
                            <div className={`${styles.flip_card_back}`}>
                                <h6>Amazon</h6>
                                <p>Gold Sponser</p>
                                <p>Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free
                                    Shipping & Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                </div><div className={`${styles.column}`}>
                    <div className={`${styles.flip_card}`}>
                        <div className={`${styles.flip_card_inner}`}>
                            <div className={`${styles.flip_card_front}`}>
                                <img src="https://bikemalik.com/wp-content/uploads/2018/01/Hero-Xtreme-Sports-1.jpg" alt="amazon" style={{width:"300px",height:"300px"}}/>
                            </div>
                            <div className={`${styles.flip_card_back}`}>
                                <h6>Amazon</h6>
                                <p>Gold Sponser</p>
                                <p>Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free
                                    Shipping & Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.column}`}>
                    <div className={`${styles.flip_card}`}>
                        <div className={`${styles.flip_card_inner}`}>
                            <div className={`${styles.flip_card_front}`}>
                                <img src="https://www.reuters.com/resizer/JCEDftTsl0Gdi4Kv1jD2-zWTGUU=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2JAEG65I7FJRXALKYEP4QCCFJU.jpg" alt="amazon" style={{width:"300px",height:"300px"}}/>
                            </div>
                            <div className={`${styles.flip_card_back}`}>
                                <h6>Amazon</h6>
                                <p>Gold Sponser</p>
                                <p>Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free
                                    Shipping & Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.column}`}>
                    <div className={`${styles.flip_card}`}>
                        <div className={`${styles.flip_card_inner}`}>
                            <div className={`${styles.flip_card_front}`}>
                                <img src="https://bikemalik.com/wp-content/uploads/2018/01/Hero-Xtreme-Sports-1.jpg" alt="amazon" style={{width:"300px",height:"300px"}}/>
                            </div>
                            <div className={`${styles.flip_card_back}`}>
                                <h6>Amazon</h6>
                                <p>Gold Sponser</p>
                                <p>Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free
                                    Shipping & Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.column}`}>
                    <div className={`${styles.flip_card}`}>
                        <div className={`${styles.flip_card_inner}`}>
                            <div className={`${styles.flip_card_front}`}>
                                <img src="https://www.reuters.com/resizer/JCEDftTsl0Gdi4Kv1jD2-zWTGUU=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2JAEG65I7FJRXALKYEP4QCCFJU.jpg" alt="amazon" style={{width:"300px",height:"300px"}}/>
                            </div>
                            <div className={`${styles.flip_card_back}`}>
                                <h6>Amazon</h6>
                                <p>Gold Sponser</p>
                                <p>Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free
                                    Shipping & Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.column}`}>
                    <div className={`${styles.flip_card}`}>
                        <div className={`${styles.flip_card_inner}`}>
                            <div className={`${styles.flip_card_front}`}>
                                <img src="https://www.reuters.com/resizer/JCEDftTsl0Gdi4Kv1jD2-zWTGUU=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2JAEG65I7FJRXALKYEP4QCCFJU.jpg" alt="amazon" style={{width:"300px",height:"300px"}}/>
                            </div>
                            <div className={`${styles.flip_card_back}`}>
                                <h6>Amazon</h6>
                                <p>Gold Sponser</p>
                                <p>Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free
                                    Shipping & Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.column}`}>
                    <div className={`${styles.flip_card}`}>
                        <div className={`${styles.flip_card_inner}`}>
                            <div className={`${styles.flip_card_front}`}>
                                <img src="https://www.reuters.com/resizer/JCEDftTsl0Gdi4Kv1jD2-zWTGUU=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2JAEG65I7FJRXALKYEP4QCCFJU.jpg" alt="amazon" style={{width:"300px",height:"300px"}}/>
                            </div>
                            <div className={`${styles.flip_card_back}`}>
                                <h6>Amazon</h6>
                                <p>Gold Sponser</p>
                                <p>Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free
                                    Shipping & Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id={`${styles.silver}`}>
            <h2 className="u-pt-1 u-text-center" id={`${styles.silver}`}>Silver Sponsor</h2>
            <div className={`${styles.row}`}>
                <div className={`${styles.column}`}>
                    <div className={`${styles.flip_card}`}>
                        <div className={`${styles.flip_card_inner}`}>
                            <div className={`${styles.flip_card_front}`}>
                                <img src="https://www.reuters.com/resizer/JCEDftTsl0Gdi4Kv1jD2-zWTGUU=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2JAEG65I7FJRXALKYEP4QCCFJU.jpg" alt="amazon" style={{width:"300px",height:"200px"}}/>
                            </div>
                            <div className={`${styles.flip_card_back}`}>
                                <h6>Amazon</h6>
                                <p>Gold Sponser</p>
                                <p>Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free
                                    Shipping & Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.column}`}>
                    <div className={`${styles.flip_card}`}>
                        <div className={`${styles.flip_card_inner}`}>
                            <div className={`${styles.flip_card_front}`}>
                                <img src="https://bikemalik.com/wp-content/uploads/2018/01/Hero-Xtreme-Sports-1.jpg" alt="amazon" style={{width:"300px",height:"200px"}}/>
                            </div>
                            <div className={`${styles.flip_card_back}`}>
                                <h6>Amazon</h6>
                                <p>Gold Sponser</p>
                                <p>Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free
                                    Shipping & Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.column}`}>
                    <div className={`${styles.flip_card}`}>
                        <div className={`${styles.flip_card_inner}`}>
                            <div className={`${styles.flip_card_front}`}>
                                <img src="https://bikemalik.com/wp-content/uploads/2018/01/Hero-Xtreme-Sports-1.jpg" alt="amazon" style={{width:"300px",height:"200px"}}/>
                            </div>
                            <div className={`${styles.flip_card_back}`}>
                                <h6>Amazon</h6>
                                <p>Gold Sponser</p>
                                <p>Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free
                                    Shipping & Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.column}`}>
                    <div className={`${styles.flip_card}`}>
                        <div className={`${styles.flip_card_inner}`}>
                            <div className={`${styles.flip_card_front}`}>
                                <img src="https://bikemalik.com/wp-content/uploads/2018/01/Hero-Xtreme-Sports-1.jpg" alt="amazon" style={{width:"300px",height:"200px"}}/>
                            </div>
                            <div className={`${styles.flip_card_back}`}>
                                <h6>Amazon</h6>
                                <p>Gold Sponser</p>
                                <p>Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free
                                    Shipping & Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.column}`}>
                    <div className={`${styles.flip_card}`}>
                        <div className={`${styles.flip_card_inner}`}>
                            <div className={`${styles.flip_card_front}`}>
                                <img src="https://bikemalik.com/wp-content/uploads/2018/01/Hero-Xtreme-Sports-1.jpg" alt="amazon" style={{width:"300px",height:"200px"}}/>
                            </div>
                            <div className={`${styles.flip_card_back}`}>
                                <h6>Amazon</h6>
                                <p>Gold Sponser</p>
                                <p>Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free
                                    Shipping & Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.column}`}>
                    <div className={`${styles.flip_card}`}>
                        <div className={`${styles.flip_card_inner}`}>
                            <div className={`${styles.flip_card_front}`}>
                                <img src="https://www.reuters.com/resizer/JCEDftTsl0Gdi4Kv1jD2-zWTGUU=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2JAEG65I7FJRXALKYEP4QCCFJU.jpg" alt="amazon" style={{width:"300px",height:"200px"}}/>
                            </div>
                            <div className={`${styles.flip_card_back}`}>
                                <h6>Amazon</h6>
                                <p>Gold Sponser</p>
                                <p>Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free
                                    Shipping & Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.column}`}>
                    <div className={`${styles.flip_card}`}>
                        <div className={`${styles.flip_card_inner}`}>
                            <div className={`${styles.flip_card_front}`}>
                                <img src="https://bikemalik.com/wp-content/uploads/2018/01/Hero-Xtreme-Sports-1.jpg" alt="amazon" style={{width:"300px",height:"200px"}}/>
                            </div>
                            <div className={`${styles.flip_card_back}`}>
                                <h6>Amazon</h6>
                                <p>Gold Sponser</p>
                                <p>Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free
                                    Shipping & Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.column}`}>
                    <div className={`${styles.flip_card}`}>
                        <div className={`${styles.flip_card_inner}`}>
                            <div className={`${styles.flip_card_front}`}>
                                <img src="https://www.reuters.com/resizer/JCEDftTsl0Gdi4Kv1jD2-zWTGUU=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2JAEG65I7FJRXALKYEP4QCCFJU.jpg" alt="amazon" style={{width:"300px",height:"200px"}}/>
                            </div>
                            <div className={`${styles.flip_card_back}`}>
                                <h6>Amazon</h6>
                                <p>Gold Sponser</p>
                                <p>Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free
                                    Shipping & Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.column}`}>
                    <div className={`${styles.flip_card}`}>
                        <div className={`${styles.flip_card_inner}`}>
                            <div className={`${styles.flip_card_front}`}>
                                <img src="https://www.reuters.com/resizer/JCEDftTsl0Gdi4Kv1jD2-zWTGUU=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2JAEG65I7FJRXALKYEP4QCCFJU.jpg" alt="amazon" style={{width:"300px",height:"200px"}}/>
                            </div>
                            <div className={`${styles.flip_card_back}`}>
                                <h6>Amazon</h6>
                                <p>Gold Sponser</p>
                                <p>Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free
                                    Shipping & Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}