import Link from "next/link";
import styles from "./Navbar.module.css";
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from "react-bootstrap";
import { useEffect , useState} from "react";
var $ = require("jquery");

export default function Navbarlol(){
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
                                <div className={`${styles.mobile_menu} d-block d-lg-none`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        //         <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        //         <li className="nav-item active">
        //             <a className="nav-link" href="#">Home</a>
        //         </li>
        //         <li className="nav-item">
        //             <a className="nav-link disabled" href="#">Disabled</a>
        //         </li>
        //         </ul>
        //     </div>
        // </nav>
        // <header>
        //   <div className={styles.header_area}>
        //     <Navbar bg="light" expand="lg">
        //     <Container>
        //       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //       <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="me-auto">
        //           <Nav.Link href="#home">Home</Nav.Link>
        //           <Nav.Link href="#link">Link</Nav.Link>
        //           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //             <NavDropdown.Item href="#action/3.2">
        //               Another action
        //             </NavDropdown.Item>
        //             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //             <NavDropdown.Divider />
        //             <NavDropdown.Item href="#action/3.4">
        //               Separated link
        //             </NavDropdown.Item>
        //           </NavDropdown>
        //         </Nav>
        //       </Navbar.Collapse>
        //     </Container>
        //     </Navbar>
        //   </div>
        // </header>
    )
}