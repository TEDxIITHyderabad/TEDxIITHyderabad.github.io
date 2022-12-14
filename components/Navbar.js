import Link from "next/link";
import styles from "./Navbar.module.css";
import React from "react";
import { useEffect , useState} from "react";
var $ = require("jquery");

export default function Navbar(){
    useEffect(() => {
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 400) {
            $("#sticky_header").removeClass(`${styles.sticky}`);
            } else {
            $("#sticky_header").addClass(`${styles.sticky}`);
            }
        });
    })
    return (
        <header>
            <div className={styles.header_area}>
                <div id="sticky_header" className={`${styles.main_header_area}`}>
                    <div className="container-fluid p-0">
                        <div className="row align-items-center justify-content-between no-gutters">
                            <div className="col-xl-2 col-lg-2">
                                <div className={styles.logo_img}>
                                    <Link href='/' passHref>
                                        <img src="/barnd/tedx.png" alt="abcd" height={70}/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8">
                                <div className="d-none d-lg-block">
                                    <div className={styles.main_menu}>
                                        <nav>
                                            <ul id="navigation">
                                                <li><Link className="active" href="/" passHref>home</Link></li>
                                                <li><Link href="/team" passHref>Team</Link></li>
                                                <li><Link href="#" passHref>pages <i className="ti-angle-down"></i></Link>
                                                    <ul className={styles.submenu}>
                                                        <li><Link href="#" passHref>elements</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/sponsors" passHref>Sponsors</Link></li>
                                                <li><Link href="/speakers" passHref>Speakers</Link></li>
                                                <li><Link href="#" passHref>Venue</Link></li>
                                                <li><Link href="#" passHref>Contact</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                                <div className={styles.buy_ticket}>
                                    <Link href="#" className={styles.boxed_btn_white} passHref>Buy Ticket</Link>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-block d-lg-none">
                                    <div className={styles.mobile_menu}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}