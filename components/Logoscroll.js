import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Logoscroll.module.css'
import Script from 'next/script'
import dynamic from "next/dynamic";

import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });
  const Responsive = {
    0: {
        items: 1,
        margin: 5
    },
    768: {
        items: 3,
        margin: 10
    },
    1024: {
        items: 5,
        margin: 20
    }
}


export default function Logoscroll(){
    return (
        <>
        <div className={styles.brand_area}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        {/* <div className={styles.owlcarousel}> */}
                        <div className={styles.brand_active}>
                            <OwlCarousel className="owl-theme" loop margin={10} nav responsive={Responsive} >
                                <div className={styles.single_brand} style={{textAlign:'center'}}>
                                    <img src="/barnd/tedx.png" alt="" height={70}/>
                                </div>
                                <div className={styles.single_brand} style={{textAlign:'center'}}>
                                    <img src="/barnd/logo1.png" alt="" height={70}/>
                                </div>
                                <div className={styles.single_brand} style={{textAlign:'center'}}>
                                    <img src="/barnd/1.png" alt="" height={70}/>
                                </div>
                                <div className={styles.single_brand} style={{textAlign:'center'}}>
                                    <img src="/barnd/2.png" alt="" height={70}/>
                                </div>
                                <div className={styles.single_brand} style={{textAlign:'center'}}>
                                    <img src="/barnd/3.png" alt="" height={70}/>
                                </div>
                                <div className={styles.single_brand} style={{textAlign:'center'}}>
                                    <img src="/barnd/4.png" alt="" height={70}/>
                                </div>
                                <div className={styles.single_brand} style={{textAlign:'center'}}>
                                    <img src="/barnd/5.png" alt="" height={70}/>
                                </div>
                                <div className={styles.single_brand} style={{textAlign:'center'}}>
                                    <img src="/barnd/6.png" alt="" height={70}/>
                                </div>
                            </OwlCarousel>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}