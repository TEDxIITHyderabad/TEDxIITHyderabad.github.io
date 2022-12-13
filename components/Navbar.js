import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar(){
    return (
        <header>
            <div className={styles.header_area}>
                <div id="sticky_header" className={styles.main_header_area} >
                    <div className="container-fluid p-0">
                        <div className="row align-items-center justify-content-between no-gutters">
                            <div className="col-xl-2 col-lg-2">
                                <div className={styles.logo_img}>
                                    <Link href='/' passHref>
                                        <img src="img/logo.png" alt=""/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8">
                                <div className="d-none d-lg-block">
                                    <div className={styles.main_menu}>
                                        <nav>
                                            <ul id="navigation">
                                                <li><a className="active" href="index.html">home</a></li>
                                                <li><a href="/team">Team</a></li>
                                                <li><a href="#">pages <i className="ti-angle-down"></i></a>
                                                    <ul className={styles.submenu}>
                                                        <li><a href="#">elements</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/sponsors">Sponsors</a></li>
                                                <li><a href="#">Speakers</a></li>
                                                <li><a href="#">Venue</a></li>
                                                <li><a href="#">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                                <div className={styles.buy_ticket}>
                                    <a href="#" className={styles.boxed_btn_white}>Buy Ticket</a>
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